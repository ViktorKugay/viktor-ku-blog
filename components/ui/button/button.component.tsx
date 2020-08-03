import React from 'react';
import cn from 'classnames';

import s from './button.module.scss';

interface Props {
  color: 'purple';
  className?: string;
  fullWidth?: boolean;
  onClick?(evet: any): void;
}

export const Button: React.FC<Props> = ({color, className, children, onClick, fullWidth}) => {
  const classNames = cn(s.button, className, s[`color_${color}`], {[s.fullWidth]: fullWidth});

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};
