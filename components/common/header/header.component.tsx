import {scrollToElement} from '../../../utils/scrollToElement';
import {Container} from '../../ui/container/container.component';
import {Text} from '../../ui/text/text.component';
import React from 'react';

import s from './header.module.scss';

import c from './config.json';

export const Header: React.FC = ({children}) => {
  const handleLinkClick = (href: string) => (event: any) => {
    if (href[0] === '#') {
      event.preventDefault();
      scrollToElement(href.slice(1));
    }
  };

  return (
    <div className={s.root}>
      <div className={s.header_background} />

      <header>
        <Container justify="space-between" className={s.header_container}>
          <a href="/" className={s.header_link}>
            <Text color="blue" mod="h2" weight="700">
              {c.Header.title}
            </Text>
          </a>
          <nav className={s.nav}>
            {c.Header.links.map(({title, href}, index) => (
              <a key={index} href={href} className={s.header_link} onClick={handleLinkClick(href)}>
                <Text mod="h4" color="blue" weight="700">
                  {title}
                </Text>
              </a>
            ))}
          </nav>
        </Container>
      </header>
      <main>{children}</main>
    </div>
  );
};
