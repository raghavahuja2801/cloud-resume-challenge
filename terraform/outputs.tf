output "website_endpoint" {
  value = module.s3.website_endpoint
}

output "cloudfront_url" {
  value = module.cloudfront.distribution_domain_name
}

output "api_url" {
  value = module.apigateway.api_endpoint
}

output "bucket_name" {
  description = "S3 website bucket name"
  value       = module.s3.bucket_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = module.cloudfront.distribution_id
}

