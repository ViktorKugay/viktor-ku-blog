import {BookSourceMap} from '../../../../types/types';
import {Text} from '../../../ui/text/text.component';
import {Info} from '@material-ui/icons';
import cn from 'classnames';
import React from 'react';

import s from './book-card.module.scss';
import c from './book-card.config.json';

interface Props {
  book: BookSourceMap;
}

export const BookCard: React.FC<Props> = ({book}) => (
  <div className={s.root}>
    <div className={s.image_container}>
      <img src={book.image} alt={book.title} className={s.image} />
    </div>
    <div className={s.info}>
      <div className={s.logo_container}>
        <img src={book.logo} alt={book.title} className={s.logo} />
      </div>
      <Text mod="h3" weight="500" className={s.title}>
        {book.title}
      </Text>
      <Text mod="h4" className={s.author}>
        {book.author}
      </Text>
      <ul className={s.points}>
        {book.points.map((text, index) => (
          <li key={index} className={cn(s.list_item, s[`list_item_${book.color}`])}>
            <Text>{text}</Text>
          </li>
        ))}
      </ul>
      <a target="_blank" rel="noopener noreferrer" href={book.href} className={s.link}>
        <Text className={s.link_text}>{c.BookCard.link.text}</Text>
        <Info />
      </a>
    </div>
  </div>
);
