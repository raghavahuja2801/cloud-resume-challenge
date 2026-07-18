## Cloud Resume Challenge

## Sprint 0

- Setup Terraform
- Filestructure
- github repo
- Pre-commit formatting
- backend terraform s3 bucket
- DynamoDB state lock table


## Project Goal
Build a production-style cloud application with:

- Infrastructure as Code (Terraform)
- Three environments (dev, stage, prod)
- CI/CD
- Serverless backend
- Monitoring
- Secure AWS architecture
- Clean GitHub repository

## Repository Structure
cloud-resume/

frontend/

backend/

terraform/

modules/
    s3
    cloudfront
    lambda
    dynamodb
    iam
    apigateway
    route53
    acm

environments/
    dev
    stage
    prod

.github/



## Architecture

GitHub
    │
GitHub Actions
    │
Terraform
    │
AWS
├── S3 (Static Website)
├── CloudFront (CDN)
├── Route53 (DNS)
├── ACM (TLS)
├── API Gateway
├── Lambda
├── DynamoDB (Visitor Counter)
├── IAM
├── CloudWatch
└── WAF (Optional)

### Diagram

Browser
    │
    ▼
CloudFront
    │
    ▼
S3 (Frontend)

Browser
    │
    ▼
API Gateway
    │
    ▼
Lambda
    │
    ▼
DynamoDB
