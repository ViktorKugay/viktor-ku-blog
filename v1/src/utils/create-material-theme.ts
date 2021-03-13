import {grey, deepPurple} from '@material-ui/core/colors';
import {createMuiTheme, Theme} from '@material-ui/core';

export function createTheme(): Theme {
  return createMuiTheme({
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
}
