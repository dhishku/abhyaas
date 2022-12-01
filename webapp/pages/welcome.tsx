import { Box, ThemeProvider, Typography } from "@mui/material";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import appTheme from '../styles/Theme';
import languageSelector from "../constants/language";
import TopBar from "../components/UI/TopBar";
import PrimaryButton from "../components/UI/PrimaryButton";


const Welcome: NextPage = () => {
  const router = useRouter();
  const { lang } = router.query;
  let mainContent = '';
  let footer = '';
  let buttonLabel = '';
  switch (lang) {
    case languageSelector.english:
      mainContent = 'Attempt 15 real IAS prelims questions and see your predicted prelims score!';
      footer = '187 others gave this test in last 1 week';
      buttonLabel = 'Let\'s attempt';
      break;
    case languageSelector.hindi:
      mainContent = 'आईएएस परीक्षा के 15 सवाल कीजिए और अपना अनुमानित प्रिलिम स्कोर देखिए';
      footer = '187 अन्य ने पिछले 1 सप्ताह में यह टेस्ट दिया है';
      buttonLabel = 'शुरू करते हैं';
      break;
    default:
      mainContent = 'Attempt 15 real IAS prelims questions and see your predicted prelims score!';
      footer = '187 others gave this test in last 1 week';
      buttonLabel = 'Let\'s attempt';
  }
  return (
    <ThemeProvider theme={appTheme}>
      <TopBar showRules={true} showWhatsappIcon={true}/>
      <br />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '90vh'
      }}>
        <Image src={'/sitting-reading.svg'} width='328' height='244' layout='fixed'/>
        <Typography color={appTheme.palette.text.secondary} variant='h6' align='center'>
          {mainContent}
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '80vw'
        }}>
          <ShowChartIcon color='primary' sx={{margin: '8px'}}/>
          <Typography color={appTheme.palette.primary.main} variant='subtitle1' sx={{margin: '8px'}}>
            {footer}
          </Typography>
        </Box>
        <PrimaryButton label={buttonLabel}/>
      </Box>
    </ThemeProvider>
  );
};

export default Welcome;