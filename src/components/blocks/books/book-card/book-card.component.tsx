import {Info} from '@material-ui/icons';
import {Text} from '../../../ui/text/text.component';
import React, {useRef} from 'react';
import cn from 'classnames';
import anime from 'animejs';

import s from './book-card.module.scss';

interface Props {
  image: string;
  title: string;
  author: string;
  href: string;
  logo?: string;
  points: string[];
  color?: 'red' | 'orange' | 'black' | 'green' | 'yellow';
}

export const BookCard: React.FC<Props> = ({image, title, author, href, points, logo, color = 'orange'}) => {
  const icon = useRef(null);
  const container = useRef(null);

  const handleOver = () => {
    anime({
      targets: icon.current,
      rotate: '1turn',
      duration: 5000,
    });

    anime({
      targets: container.current,
      scale: 1.05,
      duration: 5000,
    });
  };

  return (
    <div className={s.root}>
      <div className={s.image_container}>
        <img src={image} alt={title} className={s.image} />
      </div>
      <div className={s.info}>
        <div className={s.logo_container}>
          <img src={logo} alt={title} className={s.logo} />
        </div>
        <Text mod="h3" weight="500" className={s.title}>
          {title}
        </Text>
        <Text mod="h4" className={s.author}>
          {author}
        </Text>
        <ul className={s.points}>
          {points.map((text, index) => (
            <li key={index} className={cn(s.list_item, s[`list_item_${color}`])}>
              <Text>{text}</Text>
            </li>
          ))}
        </ul>
        <a
          href={href}
          rel={'noopener noreferrer'}
          ref={container}
          className={s.link}
          target={'_blank'}
          onMouseEnter={handleOver}
        >
          <Text className={s.learn_more_text}>{'Learn more'}</Text>
          <Info ref={icon} />
        </a>
      </div>
    </div>
  );
};
