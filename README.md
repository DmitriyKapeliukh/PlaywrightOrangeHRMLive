### System requirements

Node.js 16+

Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).

MacOS 12 Monterey or MacOS 13 Ventura.

Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.

### Requirements
`npm init playwright@latest`

`npm i -D @playwright/test allure-playwright`

## Run test locally
### Run the tests
`npx playwright test login.spec.ts --project chromium`

### Generate report
`allure generate -o allure-report --clean`

`allure open allure-report`

## Run test with Jenkins
### Install Jenkins

Please follow the official instruction to setup Jenkins for you [OS](https://www.jenkins.io/doc/book/installing/)

### Prepare Jenkins for running the tests

Install necessary plugins:

`NodeJS Plugin Version1.6.1`

`Allure Jenkins Plugin Version2.31.1`

Create new Pipeline

![Jenkins pipeline.png](resources%2FJenkins%20pipeline.png)

Configure Pipeline

![Jenkins configure.png](resources%2FJenkins%20configure.png)
![Jenkins configure 2.png](resources%2FJenkins%20configure%202.png)

Build Pipeline
![Jenkins build.png](resources%2FJenkins%20build.png)

View Allure Test Report
![Jenkins Allure Report.png](resources%2FJenkins%20Allure%20Report.png)

Allure Report Details
![Jenkins Allure Report Details.png](resources%2FJenkins%20Allure%20Report%20Details.png)