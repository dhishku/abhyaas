import { Button, ThemeProvider, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

import TopBar from '../components/UI/TopBar';
import appTheme from '../styles/Theme';
import styles from '../styles/Home.module.css';
import SmallCard from '../components/UI/SmallCard';
import { Box, height } from '@mui/system';


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
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '100vh'
        }}>
          <Typography variant='h5' color={appTheme.palette.text.secondary} align='center'>
            Select language for IAS exam
          </Typography>
          <Typography variant='h5' color={appTheme.palette.text.secondary} align='center'>
            आप आईएएस परीक्षा कौनसी  भाषा में लिखना चाहते हैं 
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '80vw'
          }}>
            <SmallCard 
              label='English'
              clickHandler={(value: string) => {
              console.log(value);
            }}/>
            <SmallCard label='हिंदी' clickHandler={(value: string) => {
              console.log(value);
            }}/>
          </Box>
          <Typography variant='body1' color={appTheme.palette.text.secondary}>
            Already a user? Sign in
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default Home
