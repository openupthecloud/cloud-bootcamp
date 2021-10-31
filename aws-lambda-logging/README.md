## Lambda Logging

This exercise runs you through how to experiment with AWS Lambda logging on AWS, using AWS SAM to deploy our application. 

### Getting Started

* Change context into this directory: `cd aws-lambda-logging`
* Run [`sam build && sam deploy --guided`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-deploy.html), and walk-through and configure AWS SAM.
* If you change the code, re-build and deploy: `sam build && sam deploy` (you don't need the `--guided` for the second time)
* Invoke your lambda 20 times: `for i in {1..20}; do aws lambda invoke --function-name your-function-name /dev/null; done` (remember to substitute the name of your lambda function here)

## Exercise

1. Deploy the AWS Lambda Function (using the instructions above)
2. Find and view the logs in CloudWatch (find the logs in CloudWatch insights)
3. Run some log queries / filters (as below), even [create your own CloudWatch Insights queries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html)
4. [Create a CloudWatch dashboard](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html) with log results / visualisations

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