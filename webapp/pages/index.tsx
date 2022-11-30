import { Button, ThemeProvider, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import TopBar from '../components/UI/TopBar';
import appTheme from '../styles/Theme';
import styles from '../styles/Home.module.css';
import SmallCard from '../components/UI/SmallCard';
import { Box, height } from '@mui/system';
import languageSelector from '../constants/language';


const Home: NextPage = () => {
  const router = useRouter();
  const selectLanguageClickHandler = (value: string) => {
    let queryparam = '';
    switch (value) {
      case 'English': 
        queryparam = languageSelector.english;
        break;
      case 'हिंदी':
        queryparam = languageSelector.hindi;
        break;
      default: 
      queryparam = languageSelector.english;
    }
    router.push({
      pathname: '/welcome',
      query: {lang: queryparam}
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Abhyas</title>
        <meta name="description" content="Abhyas makes you perfect!" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
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
            आप आईएएस परीक्षा कौनसी भाषा में लिखना चाहते हैं 
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '80vw'
          }}>
            <SmallCard 
              label='English'
              clickHandler={selectLanguageClickHandler}/>
            <SmallCard label='हिंदी' clickHandler={selectLanguageClickHandler}/>
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
