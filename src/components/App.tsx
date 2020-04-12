import React from 'react';
import {theme} from '../theme/theme';
import {SnackbarProvider} from 'notistack';
import {Header} from './common/Header/Header';
import {MainPage} from './pages/MainPage/MainPage';
import {Notifier} from './common/Notifier/Notifier';
import {ArticlePage} from './pages/ArticlePage/ArticlePage';
import {NotifierProvider} from '../context/notifier/notifierProvider';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createStyles, makeStyles, ThemeProvider} from '@material-ui/core';

const useStyles: () => Record<string, string> = makeStyles(() =>
  createStyles({
    info: {backgroundColor: '#9b9b9b'},
  }),
);

export default () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider classes={{variantInfo: classes.info}}>
        <NotifierProvider>
          <Router>
            <Switch>
              <Header>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/post" component={ArticlePage} />
              </Header>
            </Switch>
            <Notifier />
          </Router>
        </NotifierProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
