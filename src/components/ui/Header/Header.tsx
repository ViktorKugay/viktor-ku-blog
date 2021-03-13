import {Button, ButtonMod} from '../../common/Button/Button';
import {Container} from '../../common/Container/Container';
import {Text} from '../../common/Text/Text';
import {Navigation} from '../Navigation/Navigation';
import React from 'react';

import s from './Header.module.scss';

import c from './config.json';

type NavItem = NavItemImage | NavItemText;

enum NavItemType {
  image = 'image',
  text = 'text',
}

interface NavItemImage {
  src: string;
  alt: string;
  href: string;
  type: NavItemType.image;
}

interface NavItemText {
  title: string;
  href: string;
  type: NavItemType.text;
}

export const Header: React.FC = () => {
  return (
    <header>
      <nav></nav>
    </header>
  );
};
