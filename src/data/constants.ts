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
  Instagram,
  BookOpen,
  Users,
  Compass,
  Lightbulb
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const RESUME_URL = '/assets/resume.pdf';

export const STATS = [
  { label: 'B.Tech CSE Year', value: '4th' },
  { label: 'Hands-on Projects', value: '10+' },
  { label: 'Core Tools & Tech', value: '10+' },
  { label: 'Certifications', value: '4' },
];

export interface TechItem {
  id: string;
  name: string;
  icon: string;
  whatItIs: string;
  howIUseIt: string;
  projectId?: string;
  projectName?: string;
  scaleClass?: string;
}

export const TECH_STACK: TechItem[] = [
  {
    id: 'linux',
    name: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    whatItIs: 'The open-source operating system behind most servers and cloud VMs.',
    howIUseIt: 'Primary OS for container workloads, bash automation scripts, and server configuration.',
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    whatItIs: 'Packages an app and its dependencies into portable containers.',
    howIUseIt: 'Containerized multi-service architectures with multi-stage builds, volumes, and Compose.',
    projectId: 'cloudopt-ai',
    projectName: 'CloudOpt AI',
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    whatItIs: 'Orchestrates containers: scheduling, scaling, and self-healing across a cluster.',
    howIUseIt: 'Deployed zero-downtime rolling releases, ingress routing, and service manifests on AKS.',
    projectId: 'azure-gitops-aks',
    projectName: 'GitOps CI/CD on Azure',
  },
  {
    id: 'aws',
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    whatItIs: "Amazon's cloud platform for compute, storage, networking, and managed services.",
    howIUseIt: 'Provisioned custom VPC topologies, EC2 instances, S3 static assets, Route 53, and ALB.',
    projectId: 'aws-infrastructure-automation',
    projectName: 'AWS Infrastructure Deployment',
    scaleClass: 'scale-110',
  },
  {
    id: 'azure',
    name: 'Azure',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    whatItIs: "Microsoft's cloud platform, covering VMs, AKS, and managed services.",
    howIUseIt: 'Architected secure cloud infrastructure with AKS, ACR, and automated Jenkins/ArgoCD pipelines.',
    projectId: 'azure-gitops-aks',
    projectName: 'GitOps CI/CD on Azure',
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    whatItIs: 'An open-source automation server for building, testing, and deploying code (CI/CD).',
    howIUseIt: 'Built declarative multibranch build pipelines with automated tests and registry push triggers.',
    projectId: 'azure-gitops-aks',
    projectName: 'GitOps CI/CD on Azure',
  },
  {
    id: 'argocd',
    name: 'Argo CD',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg',
    whatItIs: "A GitOps tool that keeps Kubernetes deployments in sync with what's in Git.",
    howIUseIt: 'Implemented pull-based declarative continuous sync, zero-drift reconciliation, and automated rollbacks on AKS.',
    projectId: 'azure-gitops-aks',
    projectName: 'GitOps CI/CD on Azure',
  },
  {
    id: 'terraform',
    name: 'Terraform',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    whatItIs: 'Infrastructure as Code: define and provision cloud resources with declarative config.',
    howIUseIt: 'Wrote modular, reproducible IaC templates to provision AWS networks and Azure AKS clusters.',
    projectId: 'azure-gitops-aks',
    projectName: 'GitOps CI/CD on Azure',
  },
  {
    id: 'git',
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    whatItIs: 'Distributed version control for tracking changes and collaborating.',
    howIUseIt: 'Managed branched release workflows, decoupled app and infra repositories, and GitOps single-source-of-truth.',
  },
  {
    id: 'nginx',
    name: 'Nginx',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    whatItIs: 'A web server and reverse proxy used for load balancing and routing traffic.',
    howIUseIt: 'Configured reverse proxying, path-based routing, and Ingress controllers for container clusters.',
    projectId: 'azure-gitops-aks',
    projectName: 'GitOps CI/CD on Azure',
    scaleClass: 'scale-115',
  },
];

export const SKILLS = [
  {
    title: 'Cloud Systems (AWS)',
    description: 'Designing resilient architectures with VPC isolation, Application Load Balancers, and S3. Focused on high availability, security groups, and practical resource efficiency.',
    icon: Cloud,
  },
  {
    title: 'CI/CD & Automation',
    description: 'Treating deployment as an automated, repeatable process. Building Jenkins pipelines with automated test triggers, artifact packaging, and zero-panic deployments.',
    icon: Activity,
  },
  {
    title: 'Infrastructure as Code',
    description: 'Using Terraform to eliminate manual console clicks. Writing modular, readable configuration files so environments can be versioned, audited, and recreated reliably.',
    icon: Layers,
  },
  {
    title: 'Containers & Kubernetes',
    description: 'Packaging services into lightweight Docker containers and orchestrating them with Kubernetes (AKS) for clean scaling, service discovery, and fault tolerance.',
    icon: Container,
  },
  {
    title: 'Networking & Web Servers',
    description: 'Configuring Nginx reverse proxies, SSL/TLS certificates, and path-based routing. Deeply interested in how DNS, packets, and HTTP/HTTPS move across the wire.',
    icon: Server,
  },
  {
    title: 'Git & Team Collaboration',
    description: 'Maintaining clean commit hygiene, structured branch workflows, and PR reviews that keep team collaboration transparent and project histories easy to follow.',
    icon: GitBranch,
  },
  {
    title: 'Linux & Shell Scripting',
    description: 'Comfortable living in the terminal—troubleshooting system processes, inspecting logs, managing access permissions, and automating everyday tasks with Bash.',
    icon: Terminal,
  },
  {
    title: 'CS Foundations & Logic',
    description: 'Grounded in core Data Structures and Algorithms. Approaching unfamiliar technical roadblocks with structured debugging, curiosity, and first-principles thinking.',
    icon: Code2,
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  challenges: string;
  learnings: string;
  image: string;
  tags: string[];
  github?: string;
  infraGithub?: string;
  link?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'cloudopt-ai',
    title: 'CloudOpt AI — Cloud Workload Measurement & Telemetry Framework',
    summary: 'Architected a local-first cloud measurement platform isolating backend API workloads from telemetry collection pipelines, executing 9 validated k6 experiments across 3 CPU/memory tier configurations and designing threshold-based recommendation scripts in Python.',
    problem: 'Development teams frequently overprovision cloud compute resources to buffer against traffic spikes, resulting in excessive cloud bills, or underprovision and suffer p95 latency degradations. I wanted to build an empirical benchmarking tool that tests services under stress and recommends optimal compute allocations based on real performance telemetry.',
    approach: 'Architected a local-first platform using FastAPI (Python 3.12) and PostgreSQL backend, isolating target workloads and monitoring stacks via Docker Compose. Executed staged k6 load testing profiles to stress services, and engineered automated Python log parsers capturing CPU, memory, and p95 latency metrics into Prometheus and Grafana. Built a threshold-based optimization selector and a React dashboard (Vite & Recharts) to evaluate baseline vs. recommended compute allocations.',
    challenges: 'Correlating asynchronous k6 load-testing timestamps with container resource metrics, and designing an optimization selector that balances cost reduction against 99th percentile response time SLAs.',
    learnings: 'Deepened my mastery in empirical performance engineering, container isolation, metrics aggregation with Prometheus/Grafana, and translating raw telemetry into actionable infrastructure sizing recommendations.',
    image: '/assets/images/cloudopt.png',
    tags: ['FastAPI', 'Python 3.12', 'PostgreSQL', 'Docker Compose', 'React', 'Prometheus', 'Grafana', 'k6'],
    github: 'https://github.com/Isarthak26/CloudOpt',
  },
  {
    id: 'azure-gitops-aks',
    title: 'Production GitOps CI/CD on Azure (AKS + ArgoCD)',
    summary: 'Built and deployed an end-to-end GitOps deployment pipeline on Azure using Terraform for reproducible infrastructure, Jenkins for automated CI & security scanning, ACR for container storage, and ArgoCD for declarative AKS orchestration.',
    problem: 'Traditional push-based deployment pipelines grant build agents broad admin permissions to live Kubernetes clusters, introducing security vulnerabilities and causing configuration drift. I wanted to establish a true zero-trust GitOps architecture where Git is the single source of truth and deployment happens via pull-based cluster synchronization.',
    approach: 'Wrote modular Terraform scripts to provision the Azure infrastructure (AKS cluster, Azure Container Registry, networking). Structured a decoupled two-repo workflow: application code in `portfolio_depl` and declarative Kubernetes manifests in `portfolio_infra`. Configured Jenkins on an Azure VM to run automated builds on git push, conduct container security scans, push images to ACR, and automatically commit the new version tag to `portfolio_infra`. ArgoCD running inside the AKS cluster watches for manifest updates, pulls the image from ACR, and executes zero-downtime rolling deployments across 2 replicas routed through Nginx Ingress.',
    challenges: 'Preventing circular build triggers across multi-repo commits, configuring least-privilege Azure RBAC service principals for Jenkins and ACR integration, and fine-tuning Nginx Ingress routing for smooth pod health checks during rolling updates.',
    learnings: 'Gained hands-on mastery over real-world GitOps mechanics, declarative cluster management, and Azure enterprise cloud services. Solidified the principle that decoupling CI from CD creates vastly more secure, auditable, and resilient release pipelines.',
    image: '/assets/images/azure_gitops_architecture.svg',
    tags: ['GitOps', 'ArgoCD', 'AKS', 'Azure', 'Jenkins', 'Terraform', 'Docker', 'Nginx Ingress'],
    github: 'https://github.com/Isarthak26/portfolio_depl',
    infraGithub: 'https://github.com/Isarthak26/portfolio_infra',
  },
  {
    id: 'real-time-chat-aks',
    title: 'Real-time Chat with AKS & Observability',
    summary: 'Built and orchestrated a containerized real-time chat application with automated Jenkins CI/CD on Azure Kubernetes Service, backed by live Prometheus and Grafana monitoring.',
    problem: 'Real-time applications fail quietly when WebSockets drop or pods experience memory spikes. I wanted to build a production-style microservice setup where releases are automated, and any performance hitch is immediately visible before users feel it.',
    approach: 'Containerized the Node.js WebSocket service, pushed versioned images to Azure Container Registry (ACR), and deployed to an AKS cluster. Created a Jenkins pipeline to automate builds on git push, and wired Prometheus and Grafana to track pod health, latency, and socket traffic.',
    challenges: 'Configuring Kubernetes ingress rules to handle persistent WebSocket connections without dropped sessions required tuning connection timeouts and ingress annotations.',
    learnings: 'Gained firsthand appreciation for Kubernetes networking and why observability isn’t an afterthought—having metrics ready makes diagnosing cluster issues 10x faster.',
    image: '/assets/images/architecture.png',
    tags: ['AKS', 'Jenkins', 'Prometheus', 'Grafana', 'Docker'],
    github: 'https://github.com/Isarthak26/real_time_chat_APP.git',
    link: '#',
  },
  {
    id: 'aws-secure-static-site',
    title: 'Secure Custom Domain Hosting with AWS ALB',
    summary: 'Engineered a secure web architecture on AWS combining S3 hosting, Route 53 DNS routing, ACM SSL certificates, and an Application Load Balancer for multi-target traffic forwarding.',
    problem: 'Hosting static assets is easy, but integrating custom domains, strict HTTPS redirection, and routing different paths to specific backend targets can quickly become messy if not planned properly.',
    approach: 'Configured Route 53 with ACM-managed certificates for custom domain SSL. Placed an Application Load Balancer in front of Amazon S3 and target EC2 instances, implementing rule-based path forwarding to separate static pages from dynamic backend endpoints.',
    challenges: 'Resolving DNS propagation discrepancies and debugging ACM domain validation records during initial certificate provisioning.',
    learnings: 'Solidified my understanding of internet networking layers, SSL/TLS handshake mechanisms, and how modern load balancers efficiently distribute web traffic.',
    image: '/assets/images/static.png',
    tags: ['AWS', 'S3', 'ALB', 'Route 53', 'SSL'],
  },
  {
    id: 'terraform-3-tier-infra',
    title: 'Modular 3-Tier AWS Architecture via Terraform',
    summary: 'Architected and provisioned an isolated 3-tier cloud infrastructure on AWS using reusable Terraform modules with strict network boundaries and zero public database exposure.',
    problem: 'Setting up cloud infrastructure by clicking through the AWS Management Console is slow, untracked, and prone to configuration drift between environments.',
    approach: 'Wrote modular Terraform configurations separating Presentation, Application, and Database tiers across public and private subnets. Configured NAT Gateways, Security Group hierarchies, and deployed a private RDS PostgreSQL instance.',
    challenges: 'Designing modular variable definitions and handling Terraform dependency graphs cleanly so resources would provision in the exact required sequence without race conditions.',
    learnings: 'Writing Infrastructure as Code changed how I think about systems: infrastructure should be treated with the same discipline, modularity, and version control as application code.',
    image: '/assets/images/terraform.png',
    tags: ['Terraform', 'AWS', 'IaC', 'Modular Design'],
  },
  {
    id: 'hardened-jenkins-aws',
    title: 'Production-Hardened Jenkins on AWS EC2',
    summary: 'Deployed and secured a Jenkins automation server on AWS EC2, locking down public port exposure behind an Nginx reverse proxy with automated Let’s Encrypt HTTPS certificates.',
    problem: 'Many development setups leave automation servers open on port 8080 over unencrypted HTTP, leaving sensitive build credentials and webhooks vulnerable to interception.',
    approach: 'Provisioned an Ubuntu EC2 instance, locked down AWS security groups to restrict direct port access, and configured Nginx as a reverse proxy. Set up Certbot to automate SSL certificate issuance and scheduled renewals.',
    challenges: 'Fine-tuning Nginx header forwarding (`X-Forwarded-For`, `X-Forwarded-Proto`) so Jenkins could properly recognize secure connections and prevent reverse-proxy configuration warnings.',
    learnings: 'Reinforced the mindset of defense-in-depth: security isn’t something you bolt on at the end, but a core part of setting up reliable server environments.',
    image: '/assets/images/jenkins.png',
    tags: ['Jenkins', 'Nginx', 'SSL/TLS', 'EC2 Security'],
  },
  {
    id: 'dockerized-mern-stack',
    title: 'Multi-Container MERN Stack with Docker Compose',
    summary: 'Containerized a full-stack web application with separated client, server, and MongoDB services, orchestrated on AWS EC2 using Docker Compose and Nginx.',
    problem: 'Local environment mismatches between developer laptops and production servers frequently cause runtime crashes, missing environment variables, and broken dependencies.',
    approach: 'Created clean, multi-stage Dockerfiles for both frontend and backend to minimize image footprint. Defined service networking, environment variable injection, and persistent volume storage for MongoDB using Docker Compose on an EC2 host.',
    challenges: 'Managing service startup dependencies—ensuring the backend API server waited until the MongoDB container was fully healthy and ready to accept connections before booting.',
    learnings: 'Understood container networking deeply, how volumes maintain persistent data across container restarts, and the value of containerization for reproducible deployments.',
    image: '/assets/images/docker.png',
    tags: ['Docker Compose', 'MERN', 'EC2', 'Networking'],
    github: 'https://github.com/Isarthak26/Dockerized_MERN',
  },
  {
    id: 'automated-infra-pipeline',
    title: 'Automated CI/CD for Infrastructure (Terraform + Jenkins)',
    summary: 'Built an end-to-end automation workflow where code pushes to GitHub trigger Jenkins to validate, plan, and apply modular Terraform changes across AWS VPC and compute resources.',
    problem: 'Even with Terraform, manual `apply` commands run from individual developer laptops create visibility blindspots and increase the risk of accidental breaking changes.',
    approach: 'Constructed a declarative Jenkins pipeline triggered via GitHub webhooks. The pipeline automatically checks syntax, runs security validations, generates a reviewable Terraform execution plan, and applies changes with parameterized rollback safeguards.',
    challenges: 'Securely managing AWS credentials and remote Terraform state locking via S3 and DynamoDB without hardcoding secrets in scripts or pipeline configs.',
    learnings: 'Learned the power of GitOps principles: when infrastructure changes follow the same automated pull-request and verification cycle as software code, team confidence increases dramatically.',
    image: '/assets/images/aws.png',
    tags: ['Terraform', 'Jenkins', 'AWS', 'CI/CD Automation'],
    github: 'https://github.com/Isarthak26/Docker_CICD',
  },
];

export const WORK_PHILOSOPHY = [
  {
    title: 'First-Principles Thinking',
    description: 'When microservice latency spiked, I inspected packet dumps and DNS lookups rather than restarting services blindly. Digging into protocol mechanics helps me prevent system failures at the root.',
    icon: Lightbulb,
  },
  {
    title: 'Ownership & Initiative',
    description: 'When a container failed health probes in my Azure GitOps pipeline, I audited pod event logs and ingress configs until achieving zero-downtime rollouts. I hold end-to-end accountability for every manifest and script I commit.',
    icon: Compass,
  },
  {
    title: 'Clear Communication',
    description: 'I authored modular architecture diagrams and reproducible deployment runbooks so teammates could bootstrap our container stack in minutes. Articulating technical trade-offs with clarity and humility is central to how I build.',
    icon: Users,
  },
];

export const BEYOND_CODE = {
  label: 'BEYOND CODE',
  title: 'Curious Beyond Tech',
  description: 'Outside the terminal, I read books on behavioral psychology, experiment with generative AI tools, and play sports to reset and sharpen my focus.',
  icon: BookOpen,
};

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Isarthak26' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sarthak-bordia-3b9b891a0/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/sarthak.bordia/' },
  { name: 'X', icon: X, href: 'https://x.com/sarthak_bordia?s=21' },
  { name: 'Email', icon: Mail, href: 'mailto:sarthakbordia10@gmail.com' },
];
