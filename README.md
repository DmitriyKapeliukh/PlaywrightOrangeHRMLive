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

## Generate report
`allure generate -o allure-report --clean`

`allure open allure-report`

## Run test with Jenkins
### Requirements

Create Jenkins docker network
`docker network create jenkins`