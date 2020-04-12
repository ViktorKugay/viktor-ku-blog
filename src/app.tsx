import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import domLoaded from 'dom-loaded';
import {AppContainer} from 'react-hot-loader';
import {ErrorBoundary} from './components/common/ErrorBoundary/ErrorBoundary';

import App from './components/App';

import './styles/reboot.css';

const rootEl = document.getElementById('root');

const render = (Component: React.FC) => {
  ReactDOM.render(
    <AppContainer>
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    </AppContainer>,
    rootEl,
  );
};

domLoaded.then(() => {
  render(App);
});
