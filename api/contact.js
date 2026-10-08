import nodemailer from 'nodemailer';

// Simple in-memory rate limiting per serverless instance (max 5 requests per 10 minutes)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  if (!ip) return false;
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  // Accept POST only
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Parse JSON body safely
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: 'Invalid JSON payload' });
      }
    }
    body = body || {};

    const { name, email, message, website } = body;

    // Spam honeypot: if website is non-empty, silently return 200 without sending email
    if (website && typeof website === 'string' && website.trim().length > 0) {
      return res.status(200).json({ ok: true });
    }

    // IP Rate Limit Check
    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
    if (isRateLimited(clientIp)) {
      return res.status(429).json({ error: 'Too many requests. Please wait a few minutes before trying again.' });
    }

    // Trim inputs
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    // Validation: name
    if (!trimmedName || trimmedName.length > 100) {
      return res.status(400).json({ error: 'Name is required (max 100 characters).' });
    }

    // Header injection prevention: block newline characters in name and email
    if (/[\r\n]/.test(trimmedName) || /[\r\n]/.test(trimmedEmail)) {
      return res.status(400).json({ error: 'Invalid input characters detected.' });
    }

    // Validation: email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 254) {
      return res.status(400).json({ error: 'A valid email address is required.' });
    }

    // Validation: message length
    if (!trimmedMessage || trimmedMessage.length < 10 || trimmedMessage.length > 5000) {
      return res.status(400).json({ error: 'Message must be between 10 and 5000 characters.' });
    }

    // Check credentials
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error('Server Configuration Error: GMAIL_USER or GMAIL_APP_PASSWORD environment variables are not set.');
      return res.status(500).json({ 
        error: 'Gmail credentials not configured in Vercel. Please add GMAIL_USER and GMAIL_APP_PASSWORD under Vercel > Settings > Environment Variables.' 
      });
    }

    // Create Nodemailer Transporter using Gmail SMTP service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br/>');

    // Mail Options
    const mailOptions = {
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: gmailUser,
      replyTo: trimmedEmail,
      subject: `New portfolio message from ${trimmedName}`,
      text: `New Portfolio Message\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}\n`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px; background: #ffffff;">
          <h2 style="color: #4F46E5; margin-top: 0; font-size: 20px;">New Portfolio Contact Message</h2>
          <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 4px 0; font-size: 14px;"><strong>From:</strong> ${safeName}</p>
            <p style="margin: 4px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #4F46E5;">${safeEmail}</a></p>
          </div>
          <div style="font-size: 15px; line-height: 1.6; color: #1f2937; white-space: pre-wrap; padding: 16px; background: #ffffff; border-left: 4px solid #4F46E5;">${safeMessage}</div>
          <hr style="margin: 24px 0 12px 0; border: none; border-top: 1px solid #e5e7eb;" />
          <p style="font-size: 12px; color: #9ca3af; margin: 0;">Sent directly from your portfolio contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Nodemailer Contact Form Error:', error);
    const msg = error?.message || '';
    if (msg.includes('Invalid login') || msg.includes('Username and Password not accepted') || msg.includes('535-5.7.8')) {
      return res.status(500).json({ error: 'Gmail authentication failed: Please check your 16-character Gmail App Password in Vercel settings.' });
    }
    return res.status(500).json({ error: 'Could not send. Please try again.' });
  }
}
