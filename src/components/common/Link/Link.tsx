import NextLink from 'next/link';
import noop from 'lodash/noop';
import React from 'react';

interface Props {
  href: string;
  className?: string;
  onClick?(): void;
}

const regExp = /(.+)#(\w+)/;

export const Link: React.FC<Props> = ({href, className, children, onClick = noop}) => {
  const handleClick = (event: any) => {
    const {pathname} = window.location;
    const parsedHref = href.match(regExp);
    if (parsedHref && pathname === parsedHref[1]) {
      event.preventDefault();
      scrollToElement(parsedHref[2]);
    }
    onClick();
  };

  return (
    <NextLink href={href}>
      <a className={className} href={href} onClick={handleClick}>
        {children}
      </a>
    </NextLink>
  );
};

const scrollToElement = (elementId: string): void => {
  const scrollTo = document.getElementById(elementId);
  if (scrollTo) {
    scrollTo.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
};
