#!/bin/bash

echo "What is your AWS_ACCESS_KEY_ID?"
read AWS_ACCESS_KEY_ID
gp env AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID

echo "What is your AWS_SECRET_ACCESS_KEY?"
read AWS_SECRET_ACCESS_KEY
gp env AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY

echo "Here is your AWS login link (cmd + click to open):"
aws-vault login default --backend=file