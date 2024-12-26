import { NextPage } from 'next';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import App from '../app/App';

interface MyAppProps {
  Component: NextPage;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <Provider store={store}>
      <App>
        <Component {...pageProps} />
      </App>
    </Provider>
  );
}

export default MyApp;
