import noop from 'lodash/noop';
import cn from 'classnames';
import React from 'react';

import s from './Button.module.scss';

export type ButtonMod = 'contained' | 'outlined' | 'text';

interface Props {
  mod?: ButtonMod;
  size: 's' | 'm' | 'l' | 'xl';
  color?: 'white' | 'red' | 'black' | 'gray';
  className?: string;
  onClick?(): void;
}

export const Button: React.FC<Props> = ({
  children,
  mod = 'contained',
  color = 'white',
  size = 'm',
  className,
  onClick = noop,
}) => {
  const classNames = cn(
    {
      [s[`mod_${mod}`]]: mod,
      [s[`mod_${mod}_${color}`]]: mod,
      [s[`size_${size}`]]: size,
    },
    className,
  );

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};
