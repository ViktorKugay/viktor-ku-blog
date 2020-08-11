import {NotifierProvider} from '../context/notifier/NotifierProvider';
import {useStyles} from '../utils/create-material-styles';
import {createTheme} from '../utils/create-material-theme';
import {ThemeProvider} from '@material-ui/core';
import {SnackbarProvider} from 'notistack';
import React, {ReactNode} from 'react';
import Head from 'next/head';

interface Props {
  headInnerComponent?: ReactNode;
}

export const App: React.FC<Props> = ({children, headInnerComponent: HeadContent}) => {
  const classes = useStyles({
    info: {backgroundColor: '#9b9b9b'},
  });

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{'Kugay Blog'}</title>
        <link rel="icon" href="/favicon.png" />
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
        {HeadContent}
      </Head>
      <ThemeProvider theme={createTheme()}>
        <SnackbarProvider classes={{variantInfo: classes.info}}>
          <NotifierProvider>{children}</NotifierProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};
