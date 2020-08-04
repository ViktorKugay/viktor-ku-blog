import React from 'react';
import {Container} from '../../ui/container/container.component';
import {TinyletterSubscribeForm} from 'components/blocks/footer/tinyletter/tinyletter-subscribe-form.component';
import {Socials} from './socials/social-links/social-links.component';

import s from './footer.module.scss';

export const FooterBlock: React.FC = () => {
  return (
    <Container wrap="wrap" justify="space-between" align="start" className={s.newsletter_container} id="newsletter">
      <TinyletterSubscribeForm />
      <Socials />
    </Container>
  );
};
