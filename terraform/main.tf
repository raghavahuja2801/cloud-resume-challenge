#Root file


module "s3" {
  source = "./modules/s3"

  bucket_name = "${local.bucket_name}-website"
}

