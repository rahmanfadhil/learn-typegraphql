# TypeGraphQL & TypeORM Example

>  How To Build a GraphQL API with TypeGraphQL and TypeORM. Read the [article](https://blog.logrocket.com/how-build-graphql-api-typegraphql-typeorm/).

forked from [rahmanfadhil/learn-typegraphql](https://github.com/rahmanfadhil/learn-typegraphql)

Differences:
- all deps updated
- Docker+Compose configuration added
- node-config used
- refactor names

## How to use

### Localhost

```bash
npm install
npm run start
```

This will start node server with database stored in sqlite3 file.

GraphQL playground at http://localhost:4000

### Docker

- Install [Docker](https://docs.docker.com/engine/install/)+[Compose](https://docs.docker.com/compose/install/)

```bash
docker-compose up -d
```

GraphQL playground at http://localhost:4000
