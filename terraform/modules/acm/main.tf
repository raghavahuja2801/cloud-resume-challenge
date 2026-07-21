resource "aws_acm_certificate" "website" {
  provider = aws.us_east_1

  domain_name               = var.domain_name
  subject_alternative_names = ["www.${var.domain_name}"]

  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "validation" {
  for_each = {
    for dvo in aws_acm_certificate.website.domain_validation_options :
    dvo.domain_name => {
      name  = dvo.resource_record_name
      value = dvo.resource_record_value
      type  = dvo.resource_record_type
    }
  }

  zone_id = var.zone_id

  name    = each.value.name
  type    = each.value.type
  ttl     = 60
  records = [each.value.value]

  allow_overwrite = true
}

resource "aws_acm_certificate_validation" "website" {
  provider = aws.us_east_1

  certificate_arn = aws_acm_certificate.website.arn

  validation_record_fqdns = [
    for record in aws_route53_record.validation :
    record.fqdn
  ]
}
