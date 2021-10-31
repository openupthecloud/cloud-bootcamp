## Lambda Logging

This exercise runs you through how to experiment with AWS Lambda logging on AWS, using AWS SAM to deploy our application. 

### Getting Started

* [cd](https://en.wikipedia.org/wiki/Cd_(command)) into this directory: `cd aws-lambda-logging`
* Run [`sam deploy --guided`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-deploy.html) to walk through and configure the SAM steps and create the underlying SAM resources required. 
* To re-build and deploy: `sam build && sam deploy`
* To invoke lambda 10 times: `for i in {1..20}; do aws lambda invoke --function-name sam-app-HelloWorldFunction-wBFLqI9QEAv9 /dev/null; done`

## Exercise

1. Open the AWS Lambda in AWS, find the logs and start to look around
2. Experiment viewing the logs, and filtering them to find interesting correlations
3. Experiment by creating a dashboard based on your log findings

### CloudWatch Insights Queries

Get all logs

```
fields @timestamp, @message
| sort @timestamp desc
```

Get all logs with a given substring

```
fields @timestamp, @message
| filter strcontains(@message, 'Connection')
| sort @timestamp desc
```

Get all structured logs

```
fields statusCode, user
| filter isStructuredLog
| sort @timestamp desc
```

Count all 500 errors

```
fields @timestamp, statusCode, user
| filter isStructuredLog
| filter statusCode = 500
| stats count(*) as errors by bin(1h)
| sort @timestamp desc
```

Get all 200 successes

```
fields @timestamp, statusCode, user
| filter isStructuredLog
| filter statusCode = 200
| stats count(*) as successes by bin(1h)
| sort @timestamp desc
```