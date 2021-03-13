import React from 'react';
import {Logo} from '../../../../ui/logo/logo.component';
import {Text} from '../../../../ui/text/text.component';
import {Container} from '../../../../ui/container/container.component';

import config from './section-biography.config.json';

import s from './section-biography.module.scss';

export const SectionBiography: React.FC = () => (
  <Container align="center" margin="normal" className={s.bio_container} wrap="nowrap">
    <Logo image={config.logo} className={s.logo} width={80} />
    <Text mod="h4" align="justify" color="main">
      {config.description}
      <a target="_blank" className={s.bio_link} rel="noopener noreferrer" href={config.facebook}>
        {'Viktor Kugay'}
      </a>
      {'.'}
    </Text>
  </Container>
);
