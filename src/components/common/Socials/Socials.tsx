import React from 'react';
import {Github} from './images/Github';
import {LinkedIn} from './images/LinkedIn';
import {Twitter} from './images/Twitter';

import s from './Socials.css';

const target = '__blank';
const rel = 'noopener noreferrer';

export const Socials: React.FC = () => (
  <div className={s.root}>
    <a href="/" target={target} rel={rel}>
      <Github className={s.icon} />
    </a>
    <a href="/" target={target} rel={rel}>
      <LinkedIn className={s.icon} />
    </a>
    <a href="/" target={target} rel={rel}>
      <Twitter className={s.icon} />
    </a>
  </div>
);
