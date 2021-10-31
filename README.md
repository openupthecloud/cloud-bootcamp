
# Open Up The Cloud - Cloud Bootcamp

A repository of exercises for learning about the cloud (uses [Gitpod.io](https://gitpod.io/))

## Getting Started

### 1. Open in Gitpod

It's [free up to 50 hours a month](https://www.gitpod.io/pricing), which should be enough to get you started.

Just click below 👇 

<a href="https://gitpod.io/#https://github.com/openupthecloud/cloud-bootcamp"><img src="https://gitpod.io/button/open-in-gitpod.svg"/></a>

**Note:** You don't _have_ to do this step, you can also configure your local environment according to the [Dockerfile](./.gitpod.Dockerfile) and [Gitpod YAML](./.gitpod.yml). Using Gitpod avoids understanding all of that as a beginner, though. Also, consider installing [the Gitpod browser extension](https://www.gitpod.io/docs/browser-extension/).

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

### 4. You're All Set ! 🚀

* Login to your AWS account (if you setup aws-vault): `aws-vault login default --backend=file`
* Check you have the right AWS credentials configured: `aws sts get-caller-identity --query Account --output text` will show your AWS account ID.
* Check your current environment variables with: `env | grep AWS`
* Try the following command to make an S3 bucket (note: each call makes a new bucket) `BUCKET=s3://open-up-the-cloud-test-bucket"$(date +%s)" && aws s3 mb "$BUCKET" && aws s3 ls` 

## What if I don't have an AWS account?

For cloud access, I highly recommend using the [A Cloud Guru playgrounds](https://acloudguru.com/platform/cloud-sandbox-playgrounds) so that: 

1. You don't have to deal with deleting resources
2. Never get landed with an outsized bill

If you choose to create your own AWS account, be sure to follow best-practices such as: setting up a billing alarm, etc. Using A Cloud Guru gets around this complexity, but it's your choice. 

### Backlog / Todo

List of outstanding things to do to improve this project:

- [ ] JQ exercises
- [ ] Turn setup instructions into a bash prompt script

## DISCLAIMER

Please execute any of the scripts found in this application with caution, be sure to delete any unnecessary resources after creation. 
