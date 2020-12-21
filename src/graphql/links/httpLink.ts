import {HttpLink} from '@apollo/client';

const httpLink = new HttpLink({
  uri: process.env.SERVER_URL,
});

export default httpLink;
