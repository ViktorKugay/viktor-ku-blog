import {Link} from '../../ui/link/link.component';
import {Container} from '../../ui/container/container.component';
import {Text} from '../../ui/text/text.component';
import config from './header.config.json';
import React from 'react';

import s from './header.module.scss';

const renderNavLink = ({title, href}: {title: string; href: string}, index: number) => (
  <Link key={index} href={href} className={s.header_link}>
    <Text mod="h4" color="blue" weight="700">
      {title}
    </Text>
  </Link>
);

export const Header: React.FC = () => {
  return (
    <header>
      <Container justify="space-between" className={s.header_container}>
        <Link href="/" className={s.header_link}>
          <Text color="blue" mod="h2" weight="700">
            {config.Header.title}
          </Text>
        </Link>
        <nav className={s.nav}>{config.Header.links.map(renderNavLink)}</nav>
      </Container>
    </header>
  );
};
