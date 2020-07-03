import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#534bae',
      main: '#1a237e',
      dark: '##000051',
      contrastText: '#fff',
    },
    secondary: {
      light: '#76ffff',
      main: '#18ffff',
      dark: '#00cbcc',
      contrastText: '#000'
    },
  },
});

export default theme 