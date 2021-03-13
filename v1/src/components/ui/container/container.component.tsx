import React from 'react';
import cn from 'classnames';

import s from './container.module.scss';

interface Props {
  className?: string;
  justify?: 'center' | 'space-between' | 'flex-start';
  align?: 'center' | 'baseline' | 'start';
  margin?: 'normal' | 'dense';
  wrap?: 'wrap' | 'nowrap';
  id?: string;
}

export const Container: React.FC<Props> = ({
  margin = 'normal',
  justify = 'center',
  align = 'center',
  wrap = 'wrap',
  className,
  children,
  id,
}) => {
  const classNames = cn(
    s.root,
    s[`wrap_${wrap}`],
    s[`justify_${justify}`],
    s[`align_${align}`],
    s[`margin_${margin}`],
    className,
  );

  return (
    <div id={id} className={classNames}>
      {children}
    </div>
  );
};
