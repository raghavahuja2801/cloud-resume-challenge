output "certificate_arn" {
  value = aws_acm_certificate.website.arn
}

output "validation_options" {
  value = aws_acm_certificate.website.domain_validation_options
}
