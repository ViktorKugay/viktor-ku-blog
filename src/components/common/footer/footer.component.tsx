import React from 'react';

import {Divider} from '../../ui/divider/divider.component';
import {Container} from '../../ui/container/container.component';
import {Socials} from './socials/social-links/social-links.component';
import {TinyletterSubscribeForm} from './tinyletter/tinyletter-subscribe-form.component';

import s from './footer.module.scss';

export const Footer: React.FC = () => (
  <Container id="newsletter" wrap="wrap" align="start" justify="space-between" className={s.root}>
    <Container className={s.divider}>
      <Divider color="black" />
    </Container>
    <TinyletterSubscribeForm />
    <Socials />
  </Container>
);
