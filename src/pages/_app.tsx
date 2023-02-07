import React from 'react';
import NextApp, { AppContext } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { AppPropsWithLayout } from 'types/nextCustomType';
import client from '../plugins/apollo/client';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (<>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <RecoilRoot>
        <ApolloProvider client={client}>
            <MantineProvider withGlobalStyles withNormalizeCSS>
              <NotificationsProvider>
                {getLayout(<Component {...pageProps} />, pageProps)}
              </NotificationsProvider>
            </MantineProvider>
        </ApolloProvider>
      </RecoilRoot>
          </>
  );
};

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};

export default App;
