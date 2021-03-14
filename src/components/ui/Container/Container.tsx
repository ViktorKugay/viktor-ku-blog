import cn from 'classnames';
import React from 'react';

import s from './Container.module.scss';

type Props = PropsFlex | PropsBlock;

interface PropsBlock {
  mod: 'block';
  alignText?: 'center';
  padding?: 's' | 'm' | 'l';
  margin?: 's' | 'm' | 'l';
}

interface PropsFlex {
  mod: 'flex';
  direction?: 'column' | 'row';
  justify?: 'center';
  alignItems?: 'center';
  alignContent?: 'center';
  alignText?: 'center';
  padding?: 's' | 'm' | 'l';
  margin?: 's' | 'm' | 'l';
}

export const Container: React.FC<Props> = ({children, ...rest}) => {
  return <div className={getClassNames(rest)}>{children}</div>;
};

function getClassNames(props: Props): string {
  switch (props.mod) {
    case 'block':
      return buildClassNamesBlock(props);
    case 'flex':
      return buildClassNamesFlex(props);
    default:
      throw new Error('UNEXPECTED_CONTAINER_MOD');
  }
}

function buildClassNamesBlock({alignText, padding, margin}: PropsBlock): string {
  return cn({
    [s[`alignText_${alignText}`]]: alignText,
    [s[`padding_${padding}`]]: padding,
    [s[`margin_${margin}`]]: margin,
  });
}

function buildClassNamesFlex({
  alignText,
  padding,
  margin,
  alignContent,
  alignItems,
  direction,
  justify,
}: PropsFlex): string {
  return cn({
    [s[`alignContent_${alignContent}`]]: alignContent,
    [s[`alignItems_${alignItems}`]]: alignItems,
    [s[`direction_${direction}`]]: direction,
    [s[`justify_${justify}`]]: justify,
    [s[`alignText_${alignText}`]]: alignText,
    [s[`padding_${padding}`]]: padding,
    [s[`margin_${margin}`]]: margin,
  });
}
