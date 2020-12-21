import React from 'react';
import {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';
import store from '@store/index';
import client from '@graphql/client';
import '@styles/main.scss';

function App({Component, pageProps}: AppProps) {
  return (
    <div>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </div>
  )
}

export default App;
