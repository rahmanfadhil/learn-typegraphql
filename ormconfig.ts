import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { models as entities } from "./src/models";
import config from "config";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const connectionOptions: PostgresConnectionOptions | SqliteConnectionOptions = {
  ...config.get<PostgresConnectionOptions | SqliteConnectionOptions>(
    "database"
  ),
  entities,
};

console.log(JSON.stringify({ connectionOptions }));

export default connectionOptions;
