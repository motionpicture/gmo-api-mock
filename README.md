# GMO Payment Gateway mock API

[![CircleCI](https://circleci.com/gh/motionpicture/gmo-api-mock.svg?style=svg)](https://circleci.com/gh/motionpicture/gmo-api-mock)
[![Known Vulnerabilities](https://snyk.io/test/github/motionpicture/gmo-api-mock/badge.svg)](https://snyk.io/test/github/motionpicture/gmo-api-mock)
[![Coverage Status](https://coveralls.io/repos/github/motionpicture/gmo-api-mock/badge.svg)](https://coveralls.io/github/motionpicture/gmo-api-mock)

## Table of contents

* [Background](#background)
* [Requirement](#requirement)
* [Usage](#usage)
* [Jsdoc](#jsdoc)
* [License](#license)

## Background

## Requirement

## Usage

### インフラ
#### web server
node.js application  
- iis on [Azure WebApps](https://azure.microsoft.com/ja-jp/services/app-service/web/)
- nginx on [GCP AppEngine](https://cloud.google.com/appengine/?hl=ja)
- nginx on [AWS elastic beanstalk](https://aws.amazon.com/jp/elasticbeanstalk/)

#### DB
- Redis Cache

### Environment variables

| Name                    | Required | Value          | Purpose             |
| ----------------------- | -------- | -------------- | ------------------- |
| `DEBUG`                 | false    | gmo-api-mock:* | Debug               |
| `NODE_ENV`              | true     |                | 許可証暗号化の秘密鍵 |
| `RATE_LIMIT_REDIS_HOST` | true     |                | Redis Cache接続ホスト  |
| `RATE_LIMIT_REDIS_PORT` | true     |                | Redis Cache接続ポート  |
| `RATE_LIMIT_REDIS_KEY`  | true     |                | Redis Cache接続キー   |

## Jsdoc

`npm run doc`でjsdocを作成できます。./docに出力されます。

## License

ISC
