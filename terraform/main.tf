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


module "lambda" {
  source = "./modules/lambda"

  function_name = "${local.name_prefix}-visitor-counter"

  lambda_zip = "../backend/visitor-counter/function.zip"

  table_name = module.dynamodb.table_name
  table_arn  = module.dynamodb.table_arn
}


module "dynamodb" {
  source = "./modules/dynamodb"

  table_name = "${local.name_prefix}-visitor-counter"
}

module "apigateway" {
  source = "./modules/apigateway"

  api_name             = "${local.name_prefix}-api"
  lambda_invoke_arn    = module.lambda.invoke_arn
  lambda_function_name = module.lambda.function_name
}
