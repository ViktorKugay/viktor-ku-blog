import {Container} from '../../ui/Container/Container';
import {Text} from '../../ui/Text/Text';
import {Link} from 'react-router-dom';
import React from 'react';

// @ts-ignore
import smoothScroll from 'smoothscroll';

import s from './Header.css';

import c from './config.json';

export const Header: React.FC = ({children}) => {
  const handleLinkClick = (href: string) => (event: any) => {
    if (href[0] === '#') {
      event.preventDefault();
      const scrollTo = document.querySelector(href);

      if (scrollTo) {
        smoothScroll(scrollTo);
      }
    }
  };

  return (
    <div className={s.root}>
      <div className={s.header_background} />

      <header>
        <Container justify="space-between" className={s.header_container}>
          <Link to="/" className={s.header_link}>
            <Text color="blue" mod="h2" weight="700">
              {c.Header.title}
            </Text>
          </Link>
          <nav className={s.nav}>
            {c.Header.links.map(({title, href}, index) => (
              <Link key={index} to={href} className={s.header_link} onClick={handleLinkClick(href)}>
                <Text mod="h4" color="blue" weight="700">
                  {title}
                </Text>
              </Link>
            ))}
          </nav>
        </Container>
      </header>
      <main>{children}</main>
    </div>
  );
};
