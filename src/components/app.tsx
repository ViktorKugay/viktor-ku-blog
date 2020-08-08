import {ThemeProvider, createStyles, makeStyles} from '@material-ui/core';
import {NotifierProvider} from '../context/notifier/NotifierProvider';
import {grey, deepPurple} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core';
import {SnackbarProvider} from 'notistack';
import React, {ReactElement} from 'react';
import Head from 'next/head';

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

const useStyles: () => Record<string, string> = makeStyles(() =>
  createStyles({
    info: {backgroundColor: '#9b9b9b'},
  }),
);

interface Props {
  head?: ReactElement;
}

export const App: React.FC<Props> = ({children, head: HeadComponent}) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{'Viktor Kugay'}</title>
        <link rel="icon" href={'https://static.rnd.tinkoff.ru/misc/favicon-4bed33d1-e37d-44f8-b2d3-4d9174ab42fd.png'} />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,700;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {HeadComponent}
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider classes={{variantInfo: classes.info}}>
          <NotifierProvider>{children}</NotifierProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};
