import React from 'react';

import NextLink from 'next/link';
import {noop} from '../../../utils/noop';
import {scrollToElement} from 'src/utils/scroll-to-element';

interface Props {
  href: string;
  className?: string;
  onClick?(): void;
}

export const Link: React.FC<Props> = ({href, className, children, onClick = noop}) => {
  const handleClick = (event: any) => {
    if (href[1] === '#') {
      event.preventDefault();
      scrollToElement(href.slice(2));
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
