import "reflect-metadata";
import config from "config";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema } from "type-graphql";

const PORT = config.get("app.port");


import { BookResolver, HelloWorldResolver } from "./resolvers";

async function main() {
  await createConnection();
  const schema = await buildSchema({
    resolvers: [BookResolver, HelloWorldResolver],
  });
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
  });
  await server.listen(PORT);
  console.log(
    `Server has started! Playground here: http://localhost:${PORT}/graphql`
  );
  if (config.get("database.type") === 'postgres') {
    console.log(
      `PG Admin GUI here: http://localhost:4100 use admin/admin to login`
    );
  }
}

main();
