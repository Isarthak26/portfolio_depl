/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, FormEvent } from 'react';
import { 
  Terminal, 
  Container, 
  Cloud, 
  Cpu, 
  GitBranch, 
  Server, 
  Activity, 
  ShieldCheck, 
  Layers,
  Code2,
  Globe,
  Mail,
  Linkedin,
  Github,
  Twitter,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { NAV_LINKS, SKILLS, PROJECTS, STATS, SOCIAL_LINKS, TECH_STACK } from './data/constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen text-[#1A1A1A] font-sans selection:bg-[#6366F1] selection:text-white overflow-x-hidden relative">
      {/* Background Gradient */}
      <div 
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
        style={{
          background: '#e3eeff',
          backgroundImage: 'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tight text-[#6366F1]"
          >
            Sarthak<span className="text-[#1A1A1A]">.</span>
          </motion.div>

            {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-sm font-medium hover:text-[#6366F1] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://drive.google.com/file/d/1oafsYntMBKQruZNVZ6GNpZnbUHNnjMhk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border-2 border-[#6366F1] text-[#6366F1] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#6366F1] hover:text-white transition-all active:scale-95"
              >
                Resume
              </motion.a>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#6366F1] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4F46E5] transition-all shadow-lg shadow-[#6366F1]/20 active:scale-95"
              >
                Hire Me
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium hover:text-[#6366F1]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#6366F1] font-semibold tracking-wider uppercase text-sm mb-4 block">Hi, I am Sarthak Bordia</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              DevOps <br />
              <span className="text-[#6366F1]">Enthusiast</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Currently pursuing B.Tech in CSE (3rd Year) with a deep focus on DevOps. 
              I specialize in automating infrastructure, container orchestration, and building robust CI/CD pipelines.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#6366F1] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4F46E5] transition-all flex items-center gap-2 shadow-xl shadow-[#6366F1]/30"
              >
                My Projects <ArrowRight size={18} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#1A1A1A] border-2 border-gray-100 px-8 py-4 rounded-full font-bold hover:border-[#6366F1] hover:text-[#6366F1] transition-all"
              >
                Let's talk now
              </motion.button>
              <motion.a 
                href="https://www.linkedin.com/in/sarthak-bordia-3b9b891a0/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0077B5] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl shadow-[#0077B5]/30 active:scale-95"
              >
                <Linkedin size={20} /> LinkedIn
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: 'spring' }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="w-full aspect-square relative z-10 cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#6366F1]/10 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-morph" />
              <img 
                src="/assets/images/sar.png" 
                alt="Sarthak Bordia" 
                className="w-full h-full object-cover rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-2xl relative z-10 border-8 border-white/50 backdrop-blur-sm"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Floating Elements */}
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-100">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-[#6366F1] mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/sec.jpeg" 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#6366F1] text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">3rd Year</p>
                <p className="text-sm opacity-80 uppercase tracking-wider">B.Tech CSE Student</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#6366F1] font-semibold tracking-wider uppercase text-sm mb-4 block">About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Passionate DevOps Engineer in the Making</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                I am a 3rd-year B.Tech Computer Science student at Bennett University with a deep-rooted passion for DevOps and Cloud Computing. 
                I have gained hands-on experience in containerization, service networking, environment variables, and cloud deployment. 
                My journey is driven by the desire to bridge the gap between development and operations through automation, 
                Infrastructure as Code (Terraform), and efficient CI/CD workflows.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#6366F1]/10 rounded-xl flex items-center justify-center text-[#6366F1]">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Education</p>
                    <p className="font-bold">B.Tech in CSE (DevOps Specialization)</p>
                    <p className="text-xs text-gray-500">Bennett University, Greater Noida (Expected 2027)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#6366F1]/10 rounded-xl flex items-center justify-center text-[#6366F1]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Certifications</p>
                    <p className="font-bold text-sm">Peer-to-Peer Protocols & LANs (CU Boulder)</p>
                    <p className="font-bold text-sm">Google IT Support Professional</p>
                  </div>
                </div>
              </div>
              <motion.a
                href="https://drive.google.com/file/d/1oafsYntMBKQruZNVZ6GNpZnbUHNnjMhk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-[#6366F1] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4F46E5] transition-all shadow-xl shadow-[#6366F1]/30"
              >
                Download Resume <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Tools I Work With</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {TECH_STACK.map((tech) => (
              <motion.img
                key={tech.name}
                src={tech.icon}
                alt={tech.name}
                title={tech.name}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="h-10 md:h-12 w-auto object-contain cursor-pointer"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#6366F1] font-semibold tracking-wider uppercase text-sm mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My DevOps Skills</h2>
            <div className="w-20 h-1.5 bg-[#6366F1] mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-50 group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#6366F1] group-hover:text-white transition-colors">
                  <skill.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#6366F1] font-semibold tracking-wider uppercase text-sm mb-4 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            </div>
            <button className="text-[#6366F1] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View all projects <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-8">
                    <div className="flex justify-end gap-3">
                      {project.github && (
                        <motion.a 
                          href={project.github} 
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#6366F1] transition-colors"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.link && (
                        <motion.a 
                          href={project.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#6366F1] transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#6366F1] transition-colors">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Project Preview"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#1A1A1A] text-white rounded-[4rem] mx-6 mb-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366F1]/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Let's build something <br />
                <span className="text-[#6366F1]">amazing together.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-md">
                Have a project in mind? Or just want to say hi? Feel free to reach out. 
                I'm always open to discussing new opportunities and challenges.
              </p>
              <div className="flex gap-6">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ y: -5, color: '#6366F1' }}
                    className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-white/10 transition-all"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-10 rounded-[3rem] border border-white/10">
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#6366F1] transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Email</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#6366F1] transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#6366F1] transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <button 
                  disabled={formStatus !== 'idle'}
                  className="w-full bg-[#6366F1] text-white py-5 rounded-2xl font-bold hover:bg-[#4F46E5] transition-all shadow-xl shadow-[#6366F1]/20 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'idle' && <>Send Message <ArrowRight size={20} /></>}
                  {formStatus === 'sending' && <>Sending...</>}
                  {formStatus === 'success' && <>Message sent! I'll get back to you soon.</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sarthak Bordia. All rights reserved.
          </p>
          <div className="flex gap-8">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-gray-500 hover:text-[#6366F1] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
