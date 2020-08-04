import React from 'react';
import {Github} from './images/Github';
import {LinkedIn} from './images/LinkedIn';
import {Twitter} from './images/Twitter';

import s from './social-links.module.scss';
import c from './social-links.config.json';

const target = '_blank';
const rel = 'noopener noreferrer';

export const Socials: React.FC = () => (
  <div className={s.root}>
    <a href={c.SocialLinks.githab} target={target} rel={rel}>
      <Github className={s.icon} />
    </a>
    <a href={c.SocialLinks.linkedin} target={target} rel={rel}>
      <LinkedIn className={s.icon} />
    </a>
    <a href={c.SocialLinks.twitter} target={target} rel={rel}>
      <Twitter className={s.icon} />
    </a>
  </div>
);
