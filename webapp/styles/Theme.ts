import { createTheme, Theme } from '@mui/material/styles';

const appTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#EE9211',
      dark: '#482C05'
    },
    secondary: {
      main: '#116DEE',
      dark: '#05162E'
    },
    error: {
      main: '#E75839'
    },
    success: {
      main: '#16B76A'
    },
    info: {
      main: '#D76B08'
    },
    grey: {
      700: '#515A66'
    },
    text: {
      primary: '#482C05',
      secondary: '#05162E'
    },
    background: {
      default: '#9C600C'
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: [
      'Open Sans',
      'sans-serif'
    ].join(',')
  }
});

export default appTheme;