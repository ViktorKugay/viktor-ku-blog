import {grey, deepPurple} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    common: {
      black: grey[900],
      white: grey[50],
    },
    primary: {
      light: grey[300],
      main: grey[600],
      dark: grey[900],
    },
    secondary: {
      light: deepPurple[50],
      main: deepPurple[500],
      dark: deepPurple[900],
    },
  },
});
