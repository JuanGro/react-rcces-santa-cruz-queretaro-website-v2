# Manual Testing Frontend

_This repository contains a [React](https://es.reactjs.org) dashboard template..._

## Index

* [Technologies](#technologies)
* [Usage](#usage)
    * [Docker-compose](#docker-compose)
    * [Manual](#manual)
* [Tests](#tests)
* [Deployment](#deployment)

## Technologies

[![React](https://img.shields.io/badge/React-%231DA1F2?logo=react&logoColor=white)](https://es.reactjs.org)
[![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://www.javascript.com)
[![Jest](https://img.shields.io/badge/-jest-%23C21325?logo=jest&logoColor=white)](https://jestjs.io)
[![Eslint](https://img.shields.io/badge/ESLint-4B3263?logo=eslint&logoColor=white)](https://eslint.org)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?logo=docker&logoColor=white)](https://www.docker.com)
[![Travis CI](https://img.shields.io/badge/travisci-%232B2F33.svg?logo=travis&logoColor=white)](https://www.travis-ci.com)
[![AWS](https://img.shields.io/badge/Amazon_AWS-%23FF9900?logo=amazon-aws&logoColor=white)](https://aws.amazon.com)
[![Github](https://img.shields.io/badge/github-%23121011.svg?logo=github&logoColor=white)](https://github.com)

## Usage

To execute this [React](https://es.reactjs.org) app, you have two alternatives, use [Docker compose](https://docs.docker.com/compose/) or run the code manually.

In both cases you must create a file called `.env` to define all the variables needed to run the app. You can see an example of this file in `.env.example`.

```bash
REACT_APP_VERSION=**Use the same as .env.example**
REACT_APP_BACKEND_URL=**Use the backend URL that you must have running e.g. http://localhost:4000/api**
```

### [Docker-compose](https://docs.docker.com/compose/)

To run the container, you must have installed [docker](https://www.docker.com) in your machine. Only execute:

```bash
docker-compose up --build
```

### Manual

**First, you must have installed [Node](https://nodejs.org/es/) version `14.17.0`.**

Then, install the dependencies using:

```bash
npm install
```

Finally, use this command to run the app:

```bash
npm start
```

## Tests

To run the tests locally follow the above [manual usage](#manual) and then execute:

```bash
npm test
```

## Deployment

Still working on this section...