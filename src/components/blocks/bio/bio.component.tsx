import React from 'react';
import {Text} from '../../ui/text/text.component';
import {Container} from '../../ui/container/container.component';
import {Logo} from '../../ui/logo/logo.component';

import s from './bio.module.scss';
import c from './bio.config.json';

export const BioBlock: React.FC = () => {
  return (
    <Container align="center" margin="normal" className={s.bio_container} wrap="nowrap">
      <Logo image={c.Bio.logo} className={s.logo} width={80} />
      <Text mod="h4" align="justify" color="main">
        {c.Bio.description}
        <a target="_blank" className={s.bio_link} rel="noopener noreferrer" href={c.Bio.facebook}>
          {'Viktor Kugay'}
        </a>
        {'.'}
      </Text>
    </Container>
  );
};
