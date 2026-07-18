output "website_endpoint" {
  value = module.s3.website_endpoint
}

output "cloudfront_url" {
  value = module.cloudfront.distribution_domain_name
}

output "api_url" {
  value = module.apigateway.api_endpoint
}
