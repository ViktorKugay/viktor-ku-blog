import React from 'react';
import {Github} from './images/Github';
import {LinkedIn} from './images/LinkedIn';
import {Twitter} from './images/Twitter';

import s from './Socials.css';

export const Socials: React.FC = () => {
  return (
    <div className={s.root}>
      <a href="/" target="__blank" rel="noopener noreferrer">
        <Github className={s.icon} />
      </a>
      <a href="/" target="__blank" rel="noopener noreferrer">
        <LinkedIn className={s.icon} />
      </a>
      <a href="/" target="__blank" rel="noopener noreferrer">
        <Twitter className={s.icon} />
      </a>
    </div>
  );
};
