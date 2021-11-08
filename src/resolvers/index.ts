import { BookResolver } from "./book.resolver";
import { HelloWorldResolver } from "./hello-world.resolver";

export { BookResolver, HelloWorldResolver };
export const resolvers = [BookResolver, HelloWorldResolver];
