# Cloud Resume Challenge

![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue)
![Terraform](https://img.shields.io/badge/Terraform-1.5+-purple)
![AWS](https://img.shields.io/badge/AWS-Serverless-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## 📖 Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [CI/CD Pipeline](#cicd-pipeline)
- [Monitoring](#monitoring)
- [Security](#security)
- [Future Improvements](#future-improvements)
- [Troubleshooting](#troubleshooting)

---

## Overview

A serverless cloud-native resume website featuring:
- **Static Website** - S3 + CloudFront with custom domain
- **Visitor Counter** - Lambda + API Gateway + DynamoDB
- **Infrastructure as Code** - Terraform with remote state
- **CI/CD** - GitHub Actions automated deployments
- **Multi-Environment** - Isolated dev/staging/prod
- **Monitoring** - CloudWatch dashboards and alarms

**Live Demo:** https://d35hputl9rebt8.cloudfront.net/

---

## Architecture

### High-Level Diagram





### Infrastructure as Code Structure

```bash
terraform/
├── environments/
│ ├── dev/ # Development environment
│ ├── staging/ # Staging environment
│ └── prod/ # Production environment
└── modules/
├── s3-website/ # S3 bucket module
├── cloudfront/ # CDN module
├── acm/ # Certificate module
├── route53/ # DNS module
├── api-gateway/ # API module
├── lambda/ # Function module
└── dynamodb/ # Database module
```


---

## Quick Start

### Prerequisites

```bash
# Required tools
- Terraform >= 1.5.0
- AWS CLI >= 2.0
- Python >= 3.9
- Git
- Node.js >= 16 (for frontend builds)
```

### Step 1: Clone Repo:
```bash
git clone https://github.com/yourusername/cloud-resume-challenge.git
cd cloud-resume-challenge
```

### Step 2: Configure AWS
```bash 
# Configure AWS CLI
aws configure
```

### Step 3: Bootstrap Terraform Backend

```bash
cd terraform/environments/dev

# Initialize Terraform
terraform init

# Create S3 bucket and DynamoDB table for state
terraform apply -target=module.backend
```

### Step 4: Deploy Infrastructure
```bash
# Plan the deployment
terraform plan -var-file="dev.tfvars"

# Apply the deployment
terraform apply -var-file="dev.tfvars" -auto-approve
```

### Step 5: Verify Deployment
```bash
# Check website
curl https://dev.resume.your-domain.com

# Check API
curl https://api.your-domain.com/visitor-count

# Check CloudWatch logs
aws logs describe-log-groups --log-group-name-prefix /aws/lambda/resume
```
---------
## Project Structure
```bash
cloud-resume-challenge/
│
├── .github/
│   └── workflows/
│       └── deploy.yml                 # CI/CD pipeline
│
├── terraform/
│   ├── environments/
│   │   ├── dev/
│   │   │   ├── main.tf               # Root module
│   │   │   ├── variables.tf
│   │   │   ├── outputs.tf
│   │   │   └── dev.tfvars            # Env-specific values
│   │   ├── staging/                  # Same structure
│   │   └── prod/                     # Same structure
│   │
│   └── modules/
│       ├── s3-website/
│       ├── cloudfront/
│       ├── acm/
│       ├── route53/
│       ├── api-gateway/
│       ├── lambda-function/
│       └── dynamodb-table/
│
├── frontend/
│   ├── index.html                    # Resume HTML
│   ├── style.css                     # Styling
│   └── script.js                     # Visitor counter logic
│
├── backend/
│   ├── visitor-counter/
│   │   ├── lambda_function.py        # Main Lambda code
│   │   ├── requirements.txt          # Dependencies
│   │   └── tests/                    # Unit tests
│   └── deployment/
│       └── package.sh               # Packaging script
│
├── docs/
│   ├── architecture.md
│   ├── deployment-guide.md
│   └── troubleshooting.md
│
└── README.md
```

---
## Technologies

### AWS Services
AWS | Services
Service	  |Purpose
S3	  |Static website hosting with encryption
CloudFront	|CDN with HTTPS and caching
Route53	|DNS and custom domain management
ACM	|SSL/TLS certificates
API Gateway	|REST API for visitor counter
Lambda	|Serverless compute (Python runtime)
DynamoDB	|Visitor count storage
CloudWatch	|Monitoring, logging, alarms
IAM	|Identity and access management


### Tools & Frameworks
Tool	|Purpose
Terraform	|Infrastructure as Code
GitHub Actions	|CI/CD automation
Python 3.9+	|Lambda runtime
HTML/CSS/JS	|Frontend
Pre-commit	|Code formatting

## CI/CD

### Pipeline
```bash
┌─────────────────────────────────────────────────────────────┐
│ 1. Lint & Format                                           │
│    ├── terraform fmt -check                               │
│    └── terraform validate                                 │
├─────────────────────────────────────────────────────────────┤
│ 2. Security Scan                                           │
│    └── tfsec (Terraform security scanner)                 │
├─────────────────────────────────────────────────────────────┤
│ 3. Terraform Plan                                          │
│    ├── Plan: dev                                         │
│    ├── Plan: staging                                     │
│    └── Plan: prod                                        │
├─────────────────────────────────────────────────────────────┤
│ 4. Deploy to Dev (auto)                                   │
│    ├── terraform apply                                   │
│    ├── Upload Lambda package                             │
│    └── Invalidate CloudFront cache                       │
├─────────────────────────────────────────────────────────────┤
│ 5. Deploy to Staging (auto)                               │
│    └── terraform apply                                   │
├─────────────────────────────────────────────────────────────┤
│ 6. Deploy to Prod (manual approval)                       │
│    └── terraform apply                                   │
└─────────────────────────────────────────────────────────────┘
```

Contributing
Fork the repository

Create feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add AmazingFeature')

Push branch (git push origin feature/AmazingFeature)

Open Pull Request

License
This project is licensed under the MIT License - see LICENSE file.

Author
Your Name

🔗 LinkedIn: your-linkedin

🐦 Twitter: @yourhandle

📧 Email: your.email@example.com

🌐 Portfolio: https://resume.your-domain.com



