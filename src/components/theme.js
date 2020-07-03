import { createMuiTheme } from '@material-ui/core/styles';
import Roboto from 'typeface-roboto';
import NotaSans from 'typeface-noto-sans-full'

const theme = createMuiTheme({

  palette: {
    primary: {
      light: '#76ffff',
      main: '#18ffff',
      dark: '#00cbcc',
      contrastText: '#000'
    },
    secondary: {
      light: '#534bae',
      main: '#1a237e',
      dark: '#000051',
      contrastText: '#fff',
    },
    type: 'dark',
    background: {
      paper:  '#1a237e',
      default: '#000051'
    },
    action: {
      hover:'#1a237e',
      selected: '#1a237e'
    },
  },
 
  typography: {
    fontFamily: [
      'NotaSans',
      'Roboto'
    ].join(','),
  
  },

  overrides: {
  MuiButton: {
    root: {
      color: '#000',
      '&:hover': {
        backgroundColor: '#1a237e',
        contrastText: '#000',
        color: '#FFF'
      }
  },
  raised: {
    color: '#000',
  },
}
}
});

export default theme 