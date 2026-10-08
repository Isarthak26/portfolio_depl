import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outPathPublic = path.resolve('public/assets/resume.pdf');
const outPathDist = path.resolve('dist/assets/resume.pdf');
fs.mkdirSync(path.dirname(outPathPublic), { recursive: true });
fs.mkdirSync(path.dirname(outPathDist), { recursive: true });

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 32, bottom: 28, left: 38, right: 38 },
  autoFirstPage: true
});

const writeStreamPublic = fs.createWriteStream(outPathPublic);
const writeStreamDist = fs.createWriteStream(outPathDist);
doc.pipe(writeStreamPublic);
doc.pipe(writeStreamDist);

// Colors matching original resume
const NAVY = '#1B365D';
const DARK = '#1E293B';
const MUTED = '#475569';
const ACCENT = '#0284C7';
const LINK_BLUE = '#2563EB';

// 1. NAME
doc.font('Helvetica-Bold').fontSize(21).fillColor(DARK).text('SARTHAK BORDIA', { align: 'center' });
doc.moveDown(0.12);

// 2. CONTACT
doc.font('Helvetica').fontSize(9).fillColor(MUTED)
   .text('Greater Noida, UP   |   +91 7610305451   |   sarthakbordia10@gmail.com', { align: 'center' });
doc.moveDown(0.1);

// 3. LINKS (Centering measured mathematically)
const linksY = doc.y;
doc.font('Helvetica-Bold').fontSize(8.8);
const ghWidth = doc.widthOfString('GitHub');
const liWidth = doc.widthOfString('LinkedIn');
const pfWidth = doc.widthOfString('Portfolio');
doc.font('Helvetica').fontSize(8.8);
const sepWidth = doc.widthOfString('   |   ');
const totalWidth = ghWidth + sepWidth + liWidth + sepWidth + pfWidth;
const startX = (595.28 - totalWidth) / 2;

doc.font('Helvetica-Bold').fontSize(8.8).fillColor(LINK_BLUE).text('GitHub', startX, linksY, { link: 'https://github.com/Isarthak26', underline: true });
const x1 = startX + ghWidth;
doc.font('Helvetica').fillColor(MUTED).text('   |   ', x1, linksY, { underline: false });
const x2 = x1 + sepWidth;
doc.font('Helvetica-Bold').fillColor(LINK_BLUE).text('LinkedIn', x2, linksY, { link: 'https://www.linkedin.com/in/sarthak-bordia-3b9b891a0/', underline: true });
const x3 = x2 + liWidth;
doc.font('Helvetica').fillColor(MUTED).text('   |   ', x3, linksY, { underline: false });
const x4 = x3 + sepWidth;
doc.font('Helvetica-Bold').fillColor(LINK_BLUE).text('Portfolio', x4, linksY, { link: 'https://github.com/Isarthak26', underline: true });

doc.moveDown(0.35);

// Top thick divider
const topHrY = doc.y;
doc.strokeColor(NAVY).lineWidth(2).moveTo(38, topHrY).lineTo(557, topHrY).stroke();
doc.moveDown(0.4);

function sectionHeader(title) {
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(NAVY).text(title.toUpperCase(), 38, doc.y, { characterSpacing: 0.3 });
  doc.moveDown(0.18);
}

// PROFESSIONAL SUMMARY
sectionHeader('Professional Summary');
doc.font('Helvetica').fontSize(8.3).fillColor(DARK).lineGap(1.3).text(
  'Computer Science undergraduate specializing in DevOps, with hands-on experience in cloud infrastructure, CI/CD pipelines, containerization, and automated deployments. Experienced with AWS, Azure, Docker, Kubernetes, Terraform, and Jenkins. Driven problem-solver focused on building scalable, reliable systems through practical engineering and infrastructure automation.',
  38,
  doc.y,
  { width: 519 }
);
doc.moveDown(0.35);

// TECHNICAL SKILLS & CORE COMPETENCIES
sectionHeader('Technical Skills & Core Competencies');
function skillItem(label, items) {
  doc.font('Helvetica-Bold').fontSize(8.3).fillColor(DARK).text(label + ': ', 38, doc.y, { continued: true });
  doc.font('Helvetica').fillColor(DARK).text(items, { width: 519 });
}
skillItem('Programming & Core CS', 'C++, Python, Data Structures & Algorithms, REST APIs, Linux CLI, Bash');
doc.moveDown(0.1);
skillItem('Cloud & Infrastructure', 'AWS (EC2, S3, VPC, ALB, Route 53, ACM, RDS), Azure (AKS, ACR), Docker, Kubernetes, Terraform');
doc.moveDown(0.1);
skillItem('DevOps & Observability', 'Jenkins, ArgoCD (GitOps), Nginx, Prometheus, Grafana, k6, Git');
doc.moveDown(0.1);
skillItem('Core Competencies', 'Technical Communication, Workflow Automation, Infrastructure as Code, End-to-End System Design');
doc.moveDown(0.35);

// FEATURED PROJECTS
sectionHeader('Featured Projects');

function renderProject(title, tech, bullets, projectLink) {
  const startY = doc.y;
  doc.font('Helvetica-Bold').fontSize(8.6).fillColor(DARK).text(title, 38, startY, { width: 430 });
  const titleEndY = doc.y;
  if (projectLink) {
    doc.font('Helvetica-Bold').fontSize(8.2).fillColor(LINK_BLUE).text('[View Project]', 470, startY, { width: 87, link: projectLink, underline: true, align: 'right' });
  }
  doc.y = Math.max(titleEndY, doc.y) + 1;
  doc.font('Helvetica-Bold').fontSize(7.5).fillColor(ACCENT).text(tech, 38, doc.y, { width: 519 });
  doc.moveDown(0.08);
  bullets.forEach(b => {
    doc.font('Helvetica').fontSize(7.8).fillColor(DARK).text('•  ' + b, 44, doc.y, { width: 513, lineGap: 0.8 });
  });
  doc.moveDown(0.18);
}

renderProject(
  'CloudOpt AI',
  'Python (FastAPI), Docker Compose, Prometheus, Grafana, k6',
  [
    'Architected a local-first cloud measurement platform isolating backend API workloads from telemetry collection pipelines.',
    'Executed 9 validated k6 experiments across 3 CPU/memory tier configurations under varied load profiles, identifying CPU saturation as the root cause of a 17–28x p95 latency surge at 0.25 CPU / 128 MB limits.',
    'Designed threshold-based recommendation scripts in Python to evaluate workload allocations against target SLA thresholds.'
  ],
  'https://github.com/Isarthak26/CloudOpt'
);

renderProject(
  'Azure GitOps CI/CD Pipeline',
  'Terraform, Azure Container Registry (ACR), Azure Kubernetes Service (AKS), Jenkins, ArgoCD, Nginx',
  [
    'Automated cloud infrastructure provisioning on Azure Kubernetes Service (AKS) using modular Terraform configurations.',
    'Integrated Jenkins build pipelines with Azure Container Registry (ACR) and ArgoCD GitOps continuous deployment to AKS.'
  ],
  'https://github.com/Isarthak26/portfolio_infra'
);

renderProject(
  'Real-time Chat App on AKS',
  'Docker, Kubernetes (AKS), Azure Container Registry, Jenkins, Prometheus, Grafana',
  [
    'Orchestrated containerized application services on Azure Kubernetes Service automated through Jenkins deployment pipelines.',
    'Configured Prometheus metrics scrapers and Grafana monitoring dashboards for real-time cluster health and resource tracking.'
  ],
  'https://github.com/Isarthak26/real_time_chat_APP'
);

renderProject(
  'Automated AWS Infrastructure Deployment',
  'AWS (VPC, EC2, RDS, ALB, Route 53, ACM), Terraform, Jenkins, Python (Flask)',
  [
    'Provisioned secure AWS network topology deploying Python Flask services on EC2 alongside database resources within a custom VPC.',
    'Configured Application Load Balancer routing, Route 53 DNS records, ACM SSL certificates, and automated Jenkins pipelines.'
  ],
  'https://github.com/Isarthak26/Docker_CICD'
);

renderProject(
  'Static Website Hosting on AWS',
  'AWS S3, Route 53, ACM, Application Load Balancer, EC2',
  [
    'Hosted custom domain static assets on S3 integrated with Route 53 DNS routing and ACM SSL/TLS certificate management.',
    'Configured Application Load Balancer path-based routing rules to direct incoming web traffic to target backend instances.'
  ],
  'https://github.com/Isarthak26'
);

// EDUCATION, CERTIFICATIONS & LANGUAGES
sectionHeader('Education, Certifications & Languages');

const eduStart1 = doc.y;
doc.font('Helvetica-Bold').fontSize(8.3).fillColor(DARK).text('Bennett University', 38, eduStart1, { continued: true });
doc.font('Helvetica').fillColor(DARK).text(' — B.Tech in CSE (DevOps Specialization) — CGPA: 7.12', { width: 390 });
const eduEnd1 = doc.y;
doc.font('Helvetica-Bold').fontSize(7.8).fillColor(MUTED).text('08/2023 – 08/2027', 430, eduStart1, { width: 127, align: 'right' });
doc.y = Math.max(eduEnd1, doc.y) + 2;

const eduStart2 = doc.y;
doc.font('Helvetica-Bold').fontSize(8.3).fillColor(DARK).text('Gurukul School', 38, eduStart2, { continued: true });
doc.font('Helvetica').fillColor(DARK).text(' — Senior Secondary Education', { width: 390 });
const eduEnd2 = doc.y;
doc.font('Helvetica-Bold').fontSize(7.8).fillColor(MUTED).text('03/2011 – 03/2023', 430, eduStart2, { width: 127, align: 'right' });
doc.y = Math.max(eduEnd2, doc.y) + 3;

doc.font('Helvetica-Bold').fontSize(7.8).fillColor(DARK).text('Industry Certifications: ', 38, doc.y, { continued: true });
doc.font('Helvetica').fontSize(7.8).fillColor(DARK).text(
  'Peer-to-Peer Protocols & LANs (Univ. of Colorado) | Operating Systems: Power User (Google) | Digital Electronics (Infosys) | Machine Learning Fundamentals (IBM)'
);
doc.moveDown(0.08);

doc.font('Helvetica-Bold').fontSize(7.8).fillColor(DARK).text('Languages: ', 38, doc.y, { continued: true });
doc.font('Helvetica').fontSize(7.8).fillColor(DARK).text('English (Professional), Hindi (Native)');

doc.end();
console.log('Resume PDF generated successfully.');
