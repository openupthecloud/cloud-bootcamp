## SSM Parameter store

This is a basic exercise to showcase AWS parameter store, and how to store and retrieve a key.

### Exercise 1: Create a new parameter in parameter store

1. Create a new parameter
    * `aws ssm put-parameter --name=my-secret --value=super-secret --type=String`
2. Store in parameter store
    * `aws ssm get-parameter --name=my-secret | jq .Parameter.Value -r`
3. Retrieve access logs via CloudTrail
    * `aws cloudtrail lookup-events --max-items=1000 | grep parameter/my-secret`
