import {Header} from '../../ui/Header/Header';
import {Footer} from '../../ui/Footer/Footer';
import {Text} from '../../common/Text/Text';
import React from 'react';

import c from './config.json';

import s from '../../common/Text/Text.module.scss';

export const PageMainHead: React.FC = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{c.title}</title>
    </>
  );
};

export const PageMainBody: React.FC = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

const Content: React.FC = () => {
  return null;
};
