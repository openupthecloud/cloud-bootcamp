**Note:** This repository gets updated frequently, so the name / contents of an exercise may differ from any that you've seen referenced as part of an article or video, please use either Git History to understand what has changed, to try to find the current equivalent exercise. If anything you find is broken, feel free to open a pull request, thanks! 

# Open Up The Cloud - Cloud Bootcamp

A repository of exercises for learning about the cloud (uses [Gitpod.io](https://gitpod.io/))

## Getting Started

### 1. Open in Gitpod

It's [free up to 50 hours a month](https://www.gitpod.io/pricing), which should be enough to get you started.

Just click below 👇 

<a href="https://gitpod.io/#https://github.com/openupthecloud/cloud-bootcamp"><img src="https://gitpod.io/button/open-in-gitpod.svg"/></a>

**Note:** You don't _have_ to do this step, you can also configure your local environment according to the [Dockerfile](./.gitpod.Dockerfile) and [Gitpod YAML](./.gitpod.yml). Using Gitpod avoids understanding all of that as a beginner, though. Also, consider installing [the Gitpod browser extension](https://www.gitpod.io/docs/browser-extension/).

### 2. Add your access key & secret

When the workspace opens, you'll be prompted for your `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`

Which will be added to [your Gitpod environment variables](https://www.gitpod.io/docs/environment-variables)

**Note:** Remember to replace the access key and secret with your actual ones. 

### 3. You're All Set ! 🚀

* Login to your AWS account (if you setup aws-vault): `aws-vault login default --backend=file`
* Check you have the right AWS credentials configured: `aws sts get-caller-identity --query Account --output text` will show your AWS account ID.
* Check your current environment variables with: `env | grep AWS`
* Try the following command to make an S3 bucket (note: each call makes a new bucket) `BUCKET=s3://open-up-the-cloud-test-bucket"$(date +%s)" && aws s3 mb "$BUCKET" && aws s3 ls` 

## What if I don't have an AWS account?

For cloud access, I highly recommend using the [A Cloud Guru playgrounds](https://acloudguru.com/platform/cloud-sandbox-playgrounds) so that: 

1. You don't have to deal with deleting resources
2. Never get landed with an outsized bill

If you choose to create your own AWS account, be sure to follow best-practices such as: setting up a billing alarm, etc. Using A Cloud Guru gets around this complexity, but it's your choice. 

### Something broken? 

If you find something broken in this repo, if you can fix it, I'd really appreciate if you could raise a PR! 🚀

### Backlog / Todo

List of outstanding things to do to improve this project:

- [ ] JQ exercises
- [ ] Turn setup instructions into a bash prompt script

## DISCLAIMER

Please execute any of the scripts found in this application with caution, be sure to delete any unnecessary resources after creation. 
