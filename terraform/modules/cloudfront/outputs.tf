output "distribution_arn" {
  value = aws_cloudfront_distribution.website.arn
}

output "distribution_domain_name" {
  value = aws_cloudfront_distribution.website.domain_name
}
