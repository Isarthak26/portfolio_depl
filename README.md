# 🚀 Portfolio App

A personal portfolio website built with React, containerized with Docker, and deployed on Kubernetes using a fully automated GitOps CI/CD pipeline.

---

## 📁 Repository Structure

```
portfolio_depl/
├── portfolio-app/          # React frontend source code
│   ├── src/                # Components, pages, assets
│   ├── public/             # Static files
│   ├── package.json        # Node dependencies
│   └── Dockerfile          # Multi-stage Docker build
├── Jenkinsfile             # CI pipeline definition
└── README.md
```

---

## ⚙️ CI/CD Pipeline

Every `git push` to `main` triggers the full pipeline automatically via a **GitHub Webhook**.

```
git push origin main
        ↓
GitHub Webhook fires
        ↓
Jenkins CI Server
        ↓
┌─────────────────────────────────┐
│  Stage 1: Checkout              │  Clone repo
│  Stage 2: Build Docker Image    │  docker build
│  Stage 3: Trivy Security Scan   │  Scan for vulnerabilities
│  Stage 4: Push to ACR           │  Push image to container registry
│  Stage 5: Update K8s Manifest   │  Update image tag in infra repo
│  Stage 6: ArgoCD Auto-Sync      │  Detect change and deploy
│  Stage 7: Done ✅               │  Site live!
└─────────────────────────────────┘
```

---

## 🐳 Docker

Multi-stage Dockerfile for optimized production builds:

- **Stage 1 (Build):** Node.js builds the React app
- **Stage 2 (Serve):** Lightweight image serves the static build on port `3000`

```bash
# Build locally
docker build -t portfolio .

# Run locally
docker run -p 3000:3000 portfolio
```

---

## 🔧 Local Development

```bash
cd portfolio-app

# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

---

## 🛠️ Tech Stack

| Tool | Role |
|------|------|
| React + Vite | Frontend framework |
| Docker | Containerization |
| Jenkins | CI — build, scan, push image |
| Trivy | Container security scanning |
| Azure ACR | Container registry |
| Azure AKS | Kubernetes cluster |
| ArgoCD | CD — GitOps deployment |
| Nginx Ingress | External traffic routing |

---

## 🔗 Related Repositories

| Repo | Purpose |
|------|---------|
| `portfolio_depl` | This repo — app source code |
| `portfolio_infra` | K8s manifests — ArgoCD watches this |

---

## 📌 Architecture Overview

```
Developer → GitHub → Jenkins → ACR → portfolio_infra
                                            ↓
                                        ArgoCD
                                            ↓
                                    AKS Kubernetes
                                            ↓
                                      Live Site 🌐
```

This project follows the **GitOps** pattern — the infrastructure repo is the single source of truth. ArgoCD ensures the cluster always matches what is in Git.
