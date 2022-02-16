yarn build
aws s3 sync ./build s3://elysia-land-v2 --profile=hyuno
aws cloudfront create-invalidation --distribution-id EZM5UF3WJYXRZ --paths "/*" --profile=hyuno