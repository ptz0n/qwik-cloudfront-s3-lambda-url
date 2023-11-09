# Qwik running on AWS

This is a proof of concept running a Qwik app on AWS behind CloudFront with two origins.

- __S3 Origin__ - Serving static files.
- __Lambda Function URL Origin__ - Server side rendering.

```
npm i
npm run dev
```

## Production build

```
npm run build
```

## Setup deployment

First off, you need some AWS credentials with enough permissions to create the resources in this architecture. Either as environment variables or profile in `~/.aws/credentials`.

Then you need to create a bucket, or skip and reuse an existing one to store the CloudFormation artifacts.

```bash
export DEPLOYMENT_BUCKET="qwik-deployment-bucket"
make setup-deployment
```

## Build & deploy

Deployment will build, sync static files to S3 and deploy the CloudFormation stack.

```bash
export DEPLOYMENT_BUCKET="qwik-deployment-bucket"
export STACK_NAME="qwik-stack"
export STATIC_BUCKET="qwik-static"
make deploy
```
