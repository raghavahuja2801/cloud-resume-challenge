locals {
  common_tags = {
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "Terraform"
  }

  name_prefix = "${var.project_name}-${var.environment}"
  bucket_name = "${local.name_prefix}-${data.aws_caller_identity.current.account_id}"
}
