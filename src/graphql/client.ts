import {ApolloClient, from, InMemoryCache} from '@apollo/client';
import httpLink from '@graphql/links/httpLink';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    httpLink
  ])
});

export default client;
