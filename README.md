# 🚀 Cloud Resume Challenge

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
- ✅ **Static Website** - S3 + CloudFront with custom domain
- ✅ **Visitor Counter** - Lambda + API Gateway + DynamoDB
- ✅ **Infrastructure as Code** - Terraform with remote state
- ✅ **CI/CD** - GitHub Actions automated deployments
- ✅ **Multi-Environment** - Isolated dev/staging/prod
- ✅ **Monitoring** - CloudWatch dashboards and alarms

**Live Demo:** https://resume.your-domain.com

---

## Architecture

### High-Level Diagram





### Infrastructure as Code Structure

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


### Step 1: Clone Repo:
git clone https://github.com/yourusername/cloud-resume-challenge.git
cd cloud-resume-challenge


### Step 2: Configure AWS
```bash 
# Configure AWS CLI
aws configure
```

### Bootstrap Terraform Backend

```bash
cd terraform/environments/dev

# Initialize Terraform
terraform init

# Create S3 bucket and DynamoDB table for state
terraform apply -target=module.backend
```


