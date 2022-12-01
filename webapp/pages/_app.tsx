import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';

import appTheme from '../styles/Theme';
import TopBar from '../components/UI/TopBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Abhyas</title>
        <meta name="description" content="Abhyas makes you perfect!" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ThemeProvider theme={appTheme}>
        <TopBar showRules={true} showWhatsappIcon={true}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp
