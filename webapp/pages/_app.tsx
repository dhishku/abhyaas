import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';

import appTheme from '../styles/Theme';
import TopBar from '../components/UI/TopBar';
import { Provider } from 'react-redux';
import store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <Head>
          <title>Abhyas</title>
          <meta name="description" content="Abhyas makes you perfect!" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <ThemeProvider theme={appTheme}>
          <TopBar />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default MyApp
