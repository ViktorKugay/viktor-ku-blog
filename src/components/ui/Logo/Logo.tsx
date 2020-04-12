import React from 'react';
import cn from 'classnames';

import s from './Logo.css';

interface Props {
  image: any;
  className?: string;
  mod?: 'circle';
  width?: number;
  margin?: 8 | 12 | 16 | 24;
}

export const Logo: React.FC<Props> = ({image, className, margin = 12, mod = 'circle', width}) => {
  const classNames = cn(s[`mod_${mod}`], s[`margin_${margin}`], className);

  return <img src={image} className={classNames} style={{width}} alt="logo" />;
};
