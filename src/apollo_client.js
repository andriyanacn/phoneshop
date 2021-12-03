import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://andriyanacn.hasura.app/v1/graphqll",
  cache: new InMemoryCache(),
});

export default client;


