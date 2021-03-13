import {Container} from '../../common/Container/Container';
import {Image} from '../../common/Image/Image';
import {Link} from '../../common/Link/Link';
import {Text} from '../../common/Text/Text';
import React from 'react';

import s from './Navigation.module.scss';

import c from './config.json';

export const Navigation: React.FC = () => {
  return (
    <>
      <Container mod="flex">
        <Logo />
        <Links />
        <Socials />
      </Container>
    </>
  );
};

const Logo: React.FC = () => {
  return <Image src={c.logo.src} alt={c.logo.alt} />;
};

const Links: React.FC = () => {
  return (
    <>
      {c.links.map(({href, title}, index) => (
        <Text key={index} mod="h1" fontStyle="italic">
          {title}
        </Text>
      ))}
    </>
  );
};

const Socials: React.FC = () => {
  return (
    <>
      {c.socials.map(({src, href, alt}, index) => (
        <Link key={index} href={href}>
          <Image src={src} alt={alt} />
        </Link>
      ))}
    </>
  );
};
