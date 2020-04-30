import React from 'react';
import {Github} from './images/Github';
import {LinkedIn} from './images/LinkedIn';
import {Twitter} from './images/Twitter';

import s from './Socials.css';

const target = '_blank';
const rel = 'noopener noreferrer';

const githab = 'https://github.com/ViktorKugay';
const linkedin = 'linkedin.com/in/viktor-kugai-96ba07179';
const twitter = 'https://twitter.com/ViktorKugay';

export const Socials: React.FC = () => (
  <div className={s.root}>
    <a href={githab} target={target} rel={rel}>
      <Github className={s.icon} />
    </a>
    <a href={linkedin} target={target} rel={rel}>
      <LinkedIn className={s.icon} />
    </a>
    <a href={twitter} target={target} rel={rel}>
      <Twitter className={s.icon} />
    </a>
  </div>
);
