aws s3 sync ./dist s3://elysia.land
aws cloudfront create-invalidation --distribution-id E3CKXTXNRTCQ0A --paths "/*"