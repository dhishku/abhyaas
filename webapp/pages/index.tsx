import { Button, ThemeProvider } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

import TopBar from '../components/UI/TopBar';
import appTheme from '../styles/Theme';
import styles from '../styles/Home.module.css';
import SmallCard from '../components/UI/SmallCard';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abhyas</title>
        <meta name="description" content="Abhyas makes you perfect!" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@400&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/logo.png" />
      </Head>
      <ThemeProvider theme={appTheme}>
        <TopBar showRules={true} showWhatsappIcon={true}/>
        <br />
        <SmallCard label='Try me' clickHandler={(value: string) => {
          console.log(value);
        }}/>
      </ThemeProvider>
    </div>
  )
}

export default Home
