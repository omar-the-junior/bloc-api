## Description

A blog API using [NestJs](https://github.com/nestjs/nest) framework and [prisma ORM](https://github.com/prisma/prisma)  

## Installation

```bash
$ pnpm install
```

## Running the app

> Make sure to check the `.env.exmaple` file and create a `.env` file with the same variables and values

> Make sure to have a postgres database running on your machine

```bash
# development
$ npx prisma migrate dev
$ pnpm run start

# watch mode
$ npx prisma migrate dev
$ pnpm run start:dev

# production mode
$ npx prisma migrate deploy
$ pnpm run start:prod
```

#### After running the app You can check the API documentation on [http://localhost:3000/api](http://localhost:3000/api)

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

