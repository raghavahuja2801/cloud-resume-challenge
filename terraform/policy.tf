data "aws_iam_policy_document" "cloudfront" {
  statement {
    actions = ["s3:GetObject"]

    resources = [
      "${module.s3.bucket_arn}/*"
    ]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"

      values = [
        module.cloudfront.distribution_arn
      ]
    }
  }
}

resource "aws_s3_bucket_policy" "website" {
  bucket = module.s3.bucket_name
  policy = data.aws_iam_policy_document.cloudfront.json
}
