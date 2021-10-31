
# Open Up The Cloud - Cloud Bootcamp

A repository of exercises for learning about the cloud, using [Gitpod.io](https://gitpod.io/).

## Setup 

### 1. Open in Gitpod

<a href="https://gitpod.io/#https://github.com/openupthecloud/cloud-bootcamp"><img src="https://gitpod.io/button/open-in-gitpod.svg"/></a>

### 2. Add your access key & secret

To [your environment variables](https://www.gitpod.io/docs/environment-variables)

Within Gitpod workspace, execute: 

* `gp env AWS_ACCESS_KEY_ID=your-access-key`
* `gp env AWS_SECRET_ACCESS_KEY=your-secret-key`

**Note:** Remember to replace the access key and secret with your actual ones. 

### 3. Setup aws-vault (optional)

What is [aws-vault](https://github.com/99designs/aws-vault)? 

* Set a passphrase `gp env AWS_VAULT_FILE_PASSPHRASE=password`
* Setup `aws-vault add default --backend=file --env`

Login to your AWS account: `aws-vault login default --backend=file`

### 4. Double check you have the right AWS account configured

To check you have the right credentials configured, run: `aws sts get-caller-identity --query Account --output text`

You can also check your current environment variables with: `env | grep AWS`

Try the following command to make an S3 bucket (note: each call makes a new bucket) `BUCKET=s3://open-up-the-cloud-test-bucket"$(date +%s)" && aws s3 mb "$BUCKET" && aws s3 ls` 

## Cloud Access

For cloud access, I highly recommend using the [A Cloud Guru playgrounds](https://acloudguru.com/platform/cloud-sandbox-playgrounds) so that: 

1. You don't have to deal with deleting resources
2. Never get landed with an outsized bill

## Disclaimer

Please execute any of the scripts found in this application with caution, be sure to delete any unnecessary resources after creation. 

## Backlog / Todo

- [ ] JQ exercises
- [ ] Turn setup instructions into a bash prompt script

## DISCLAIMER

Any commands ran in this repository are done at your own risk. Proceed with caution. 
