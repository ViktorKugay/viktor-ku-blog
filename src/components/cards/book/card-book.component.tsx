import React from 'react';
import cn from 'classnames';

import {Info} from '@material-ui/icons';
import {Text} from '../../ui/text/text.component';

import s from './card-book.module.scss';

interface Props {
  title: string;
  subtitle: string;
  imageUrl: string;
  logoUrl: string;
  linkUrl: string;
  pointsColor: string;
  pointsList: string[];
}

export const CardBook: React.FC<Props> = ({
  title,
  subtitle,
  imageUrl,
  linkUrl,
  logoUrl,
  pointsList,
  pointsColor,
}) => (
  <div className={s.root}>
    <div className={s.image_container}>
      <img src={imageUrl} className={s.image} />
    </div>
    <div className={s.info}>
      <div className={s.logo_container}>
        <img src={logoUrl} className={s.logo} />
      </div>
      <Text mod="h3" weight="500" className={s.title}>
        {title}
      </Text>
      <Text mod="h4" className={s.author}>
        {subtitle}
      </Text>
      <ul className={s.points}>
        {pointsList.map((text, index) => (
          <li key={index} className={cn(s.list_item, s[`list_item_${pointsColor}`])}>
            <Text>{text}</Text>
          </li>
        ))}
      </ul>
      <a target="_blank" rel="noopener noreferrer" href={linkUrl} className={s.link}>
        <Text className={s.link_text}>{'Learn more'}</Text>
        <Info />
      </a>
    </div>
  </div>
);
