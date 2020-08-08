import React from 'react';
import cn from 'classnames';
import {noop} from '../../../utils/noop';

import s from './text.module.scss';

interface Props {
  className?: string;
  isUppercase?: boolean;
  onClick?(event: any): any;
  margin?: 'normal' | 'dense';
  whiteSpace?: 'noWrap' | 'preWrap';
  fontFamily?: 'montserrat' | 'roboto';
  mod?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  color?: 'white' | 'black' | 'main' | 'blue';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  display?: 'block' | 'inline-block' | 'inline';
  align?: 'center' | 'left' | 'right' | 'justify';
  weight?: '200' | '300' | '400' | '500' | '600' | '700' | '800';
}

export const Text: React.FC<Props> = ({
  margin,
  children,
  mod = 'p',
  tag = 'p',
  className,
  align = 'left',
  weight = '400',
  onClick = noop,
  color = 'black',
  display = 'block',
  isUppercase = false,
  fontFamily = 'roboto',
  whiteSpace = 'preWrap',
}) => {
  const Tag = tag;
  const classNames = cn(
    {
      [s[`mod_${mod}`]]: mod,
      [s[`align_${align}`]]: align,
      [s[`color_${color}`]]: color,
      [s[`isUppercase`]]: isUppercase,
      [s[`weight_${weight}`]]: weight,
      [s[`margin_${margin}`]]: margin,
      [s[`display_${display}`]]: display,
      [s[`fontFamily_${fontFamily}`]]: fontFamily,
      [s[`whiteSpace_${whiteSpace}`]]: whiteSpace,
    },
    className,
  );

  return (
    <Tag className={classNames} onClick={onClick}>
      {children}
    </Tag>
  );
};
