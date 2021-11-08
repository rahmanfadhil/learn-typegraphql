# TypeGraphQL & TypeORM Example

>  How To Build a GraphQL API with TypeGraphQL and TypeORM. Read the [article](https://blog.logrocket.com/how-build-graphql-api-typegraphql-typeorm/).

forked from [rahmanfadhil/learn-typegraphql](https://github.com/rahmanfadhil/learn-typegraphql)

Differences:

- [node-config](https://github.com/lorenwest/node-config) used for configuration
- refactor file names
- update all deps
- add Docker+Compose configuration
- use postgres db in containers

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

This will start node server with database and pg-admin in different containers.

GraphQL playground at http://localhost:4000

PG Admin GUI at http://localhost:4100 use `admin/admin` as `login/password`

## Query examples

### Hello world

```graphql
{ hello }
```

### create Book

```graphql
mutation {
  createBook(data:{
    title: "Megabook",
    author: "Megamind"
  }) {
    id, title, author, isPublished
  }
}
```

### get all books

```graphql
{ books
  { id, title, author }
}
```
