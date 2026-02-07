# UrbanMart🛍️


UrbanMart is a production-grade, secure, multi-category e-commerce platform designed using modern cloud-native and DevSecOps principles.

## Key Highlights
- 3-Tier Architecture (Frontend, Backend, Database)
- Hub & Spoke Architecture
- CI/CD with integrated security scans (SAST, Image Scan, DAST)
- Kubernetes-based deployment
- Centralized monitoring with Prometheus and Grafana
- Security-first design (WAF, TLS, RBAC, Secrets)

## Goal
To simulate a real-world enterprise e-commerce platform with a strong focus on scalability, security, and observability.







🏗️ UrbanMart – End-to-End System Architecture

(DevOps + Cloud-Native + Secure Full-Stack Application)

1. High-Level System Overview

UrbanMart is a cloud-native e-commerce platform built using a microservice-ready architecture, secured and automated with DevOps best practices, deployed on Kubernetes using Helm and managed via Argo CD (GitOps).

2. Technology Stack Summary
Frontend

Framework: React (Vite)

Language: JavaScript (ES6+)

Styling: Tailwind CSS

Communication: HTTP (Axios / Fetch)

Backend

Runtime: Node.js

Framework: Express.js

Authentication: JWT (JSON Web Token)

ORM/ODM: Mongoose

Database

Type: NoSQL

Service: MongoDB Atlas (Cloud Managed)

DevOps & Cloud

Containerization: Docker

Orchestration: Kubernetes

Package Manager: Helm

GitOps: Argo CD

CI/CD: GitHub Actions

Security: Trivy

Monitoring: Health checks + external uptime monitoring

3. Application Request Flow (Core Logic)
User (Browser)
   ↓ HTTPS
React Frontend (Vite App)
   ↓ Axios / Fetch (REST API)
Express Backend (Node.js)
   ↓ Mongoose ODM
MongoDB Atlas (Cloud Database)

4. Detailed End-to-End Flow (Production-Grade)
4.1 User Interaction Layer
User
  |
  |-- HTTPS Requests
  |
React Frontend (Netlify / Ingress)


User interacts with UI (Login, Register, Shop)

Frontend sends API requests with JSON payload

JWT token stored securely (localStorage / cookie)

4.2 API Layer (Backend)
React App
   ↓ HTTP (Authorization: Bearer <JWT>)
Express API
   ↓ Controllers
Auth / Business Logic
   ↓ Models
MongoDB Atlas


Responsibilities:

Validate requests

Authenticate users

Generate JWT tokens

Communicate with database

Return structured JSON responses

5. Containerization Layer (Docker)
Each service is containerized:
Frontend Docker Image
Backend Docker Image


Lightweight images

Environment variables injected at runtime

Same image used across DEV / STAGE / PROD

6. Kubernetes Architecture (Core)
Kubernetes Cluster
│
├── Namespace: urbanmart
│
├── Frontend Deployment
│     └── React Pod(s)
│
├── Backend Deployment
│     └── Express Pod(s)
│
├── Services
│     ├── frontend-service (ClusterIP / Ingress)
│     └── backend-service (ClusterIP)
│
├── Ingress Controller
│     └── Routes traffic (HTTPS)
│
└── Secrets & ConfigMaps
      ├── Mongo URI
      ├── JWT Secret
      └── Environment configs

7. Helm Charts (Application Packaging)

Each component is packaged as a Helm Chart:

helm/
├── frontend-chart
│   ├── deployment.yaml
│   ├── service.yaml
│   └── values.yaml
│
├── backend-chart
│   ├── deployment.yaml
│   ├── service.yaml
│   └── values.yaml


Benefits:

Reusable

Versioned

Environment-specific configs

Easy rollback

8. GitOps with Argo CD
GitHub Repository
   ↓
Argo CD
   ↓
Kubernetes Cluster

How it works:

Git is single source of truth

Argo CD continuously watches repo

Any change in Helm charts:

Automatically synced

Deployed to cluster

Manual server access NOT required

✔ Declarative
✔ Auditable
✔ Secure

9. CI/CD Pipeline (GitHub Actions)
Developer
  |
  |-- git push
  |
GitHub Actions (CI)
  |
  ├── Install Dependencies
  ├── Run Build
  ├── Trivy Security Scan
  ├── Docker Image Build
  └── Push Image to Registry
         |
         ↓
GitOps Repo Update
         |
         ↓
Argo CD Auto Deploy

10. Security Architecture
10.1 Application Security

JWT-based authentication

Password hashing (bcrypt)

Protected API routes

10.2 Infrastructure Security

Trivy image vulnerability scanning

Kubernetes Secrets (no hard-coded credentials)

HTTPS via Ingress

10.3 CI Security Gates
If CRITICAL vulnerability found
   → Build FAIL
   → Deployment BLOCKED

11. Monitoring & Health
/health endpoint
   ↓
Monitoring Tool
   ↓
Alerts (Downtime / Crash)


Backend exposes /health

Used by:

Kubernetes probes

External uptime monitoring

Ensures high availability