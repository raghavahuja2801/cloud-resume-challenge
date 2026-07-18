#Root file


module "s3" {
  source = "./modules/s3"

  bucket_name = "${local.bucket_name}-website"
}

module "cloudfront" {
  source = "./modules/cloudfront"

  bucket_name                 = module.s3.bucket_name
  bucket_regional_domain_name = module.s3.bucket_regional_domain_name
}
