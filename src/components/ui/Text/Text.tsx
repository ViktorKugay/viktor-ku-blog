import cn from 'classnames';
import noop from 'lodash/noop';
import React from 'react';

import s from './Text.module.scss';

interface Props {
  className?: string;
  fullWidth?: boolean;
  isUppercase?: boolean;
  onClick?(): void;
  margin?: 's' | 'm' | 'l' | 'xl';
  whiteSpace?: 'noWrap' | 'preWrap';
  fontFamily?: 'montserrat';
  fontStyle?: 'italic' | 'normal';
  mod?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  color?: 'white' | 'black' | 'main' | 'blue';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  display?: 'block' | 'inline-block' | 'inline';
  textAlign?: 'center' | 'left' | 'right' | 'justify';
  weight?: '200' | '300' | '400' | '500' | '600' | '700' | '800';
}

export const Text: React.FC<Props> = ({
  margin,
  children,
  mod = 'p',
  tag = 'p',
  className,
  textAlign = 'left',
  weight = '400',
  onClick = noop,
  color = 'black',
  display = 'block',
  isUppercase = false,
  fontFamily = 'montserrat',
  whiteSpace = 'preWrap',
  fontStyle = 'normal',
  fullWidth = false,
}) => {
  const Tag = tag;

  const classNames = cn(
    {
      [s.fullWidth]: fullWidth,
      [s.isUppercase]: isUppercase,
      [s[`mod_${mod}`]]: mod,
      [s[`color_${color}`]]: color,
      [s[`weight_${weight}`]]: weight,
      [s[`margin_${margin}`]]: margin,
      [s[`display_${display}`]]: display,
      [s[`textAlign_${textAlign}`]]: textAlign,
      [s[`fontFamily_${fontFamily}`]]: fontFamily,
      [s[`whiteSpace_${whiteSpace}`]]: whiteSpace,
      [s[`fontStyle_${fontStyle}`]]: fontStyle,
    },
    className,
  );

  return (
    <Tag className={classNames} onClick={onClick}>
      {children}
    </Tag>
  );
};
