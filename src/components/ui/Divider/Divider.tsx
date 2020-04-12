import React from 'react';
import cn from 'classnames';

import s from './Divider.css';

interface Props {
  color?: 'white' | 'black' | 'grey';
  height?: '1' | '2' | '4' | '6';
  margin?: '4' | '8' | '12' | '16';
  className?: string;
}

export const Divider: React.FC<Props> = ({className, color = 'grey', height = '1', margin = '4'}) => {
  const classNames = cn(s[`color_${color}`], s[`height_${height}`], s[`margin_${margin}`], s.root, className);

  return <div className={classNames} />;
};
