terraform {
  backend "s3" {
    bucket         = "raghav-terraform-state-cloud"
    key            = "terraform.tfstate"
    region         = "ap-southeast-2"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
