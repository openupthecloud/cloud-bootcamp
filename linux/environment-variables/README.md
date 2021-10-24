## Environment Variables 

An environment variable is a value used by process on a computer, used to configure how they run. Lots of apps allow you to define environment variables, [such as GitHub Actions](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization). 

### Advantages

* References in code will be to variables NOT actual values (good for security)
* Common environment variable,s such as `LOG_LEVEL`

## Exercise 1: Set and/or read an environment variable

1. View the `export` command with `export --help`
1. Set an environment variable `export PASSWORD=my-super-secret-password`
1. Use your environment variable as an argument `echo $PASSWORD`
1. Explore the `env` command with `env --help`
1. See all the environment variables `env`
1. Search for your set environment variable `env | grep PASSWORD`
