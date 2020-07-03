import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: '#1de9b6',
    },
  },
});

export default theme 