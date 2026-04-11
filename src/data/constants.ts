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
  X,
  Instagram
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS = [
  {
    title: 'AWS Architecture',
    description: 'Designing secure and scalable cloud infrastructure using AWS services like S3, Route 53, and ALB.',
    icon: Cloud,
  },
  {
    title: 'Jenkins & CI/CD',
    description: 'Building automated pipelines for continuous integration and deployment of applications.',
    icon: Activity,
  },
  {
    title: 'Terraform (IaC)',
    description: 'Automating infrastructure provisioning with modular and reusable Terraform configurations.',
    icon: Layers,
  },
  {
    title: 'Docker & Kubernetes',
    description: 'Containerizing applications and orchestrating them for high availability and scalability.',
    icon: Container,
  },
  {
    title: 'Nginx',
    description: 'Configuring reverse proxies, load balancers, and enabling HTTPS with SSL/TLS.',
    icon: Server,
  },
  {
    title: 'Git',
    description: 'Version control management and collaborative development workflows.',
    icon: GitBranch,
  },
  {
    title: 'Linux Administration',
    description: 'Proficient in managing Linux environments, shell scripting, and server security.',
    icon: Terminal,
  },
  {
    title: 'Data Structures',
    description: 'Solid foundation in computer science fundamentals and problem-solving.',
    icon: Code2,
  },
];

export const PROJECTS = [
  {
    title: 'Real-time Chat with AKS & Monitoring',
    description: 'Built and deployed a real-time chat application using Docker and Kubernetes (AKS), automated via a Jenkins CI/CD pipeline integrated with Azure Container Registry, and implemented monitoring using Prometheus and Grafana.',
    image: '/assets/images/architecture.png',
    tags: ['AKS', 'Jenkins', 'Prometheus', 'Grafana'],
    github: 'https://github.com/Isarthak26/real_time_chat_APP.git',
    link: '#',
  },
  {
    title: 'Secure Static Site with AWS ALB',
    description: 'Deployed a fully secure and custom domain-based static website on AWS using S3, Route 53, and SSL. Implemented path-based routing using AWS ALB to forward traffic to distinct EC2 targets.',
    image: '/assets/images/static.png',
    tags: ['AWS', 'S3', 'ALB', 'Route 53'],
  },
  {
    title: 'Terraform 3-Tier Infrastructure',
    description: 'Designed and deployed a scalable 3-tier architecture on AWS using Terraform with modular and reusable infrastructure setup.',
    image: '/assets/images/terraform.png',
    tags: ['Terraform', 'AWS', 'IaC'],
  },
  {
    title: 'Hardened Jenkins on AWS',
    description: 'Implemented a secure Jenkins deployment on AWS EC2 by configuring Nginx as a reverse proxy and enabling HTTPS using Certbot with Let\'s Encrypt.',
    image: '/assets/images/jenkins.png',
    tags: ['Jenkins', 'Nginx', 'SSL'],
  },
  {
    title: 'Dockerized MERN on EC2',
    description: 'Successfully deployed a Dockerized MERN stack on AWS EC2 (Ubuntu) using Docker Compose and NGINX for a multi-container setup.',
    image: '/assets/images/docker.png',
    tags: ['Docker', 'MERN', 'EC2'],
  },
  {
    title: 'Automated Full-Stack Infra with Terraform & Jenkins',
    description: 'Automated the deployment of a full-stack AWS infrastructure (VPC, EC2, RDS, ALB, S3) using modular Terraform and a CI/CD pipeline via Jenkins with GitHub triggers.',
    image: '/assets/images/aws.png',
    tags: ['Terraform', 'Jenkins', 'AWS', 'CI/CD'],
  },
];

export const STATS = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'B.Tech Year', value: '3rd' },
  { label: 'Tools Mastered', value: '8+' },
  { label: 'Certifications', value: '2' },
];

export const TECH_STACK = [
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Isarthak26' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sarthak-bordia-3b9b891a0/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/srthckkk/' },
  { name: 'X', icon: X, href: 'https://x.com/sarthak_bordia?s=21' },
  { name: 'Email', icon: Mail, href: 'mailto:sarthakbordia10@gmail.com' },
];
