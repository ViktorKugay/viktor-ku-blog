import InfoIcon from '@material-ui/icons/Info';
import {Text} from '../../ui/Text/Text';
import {Link} from 'react-router-dom';
import React, {useRef} from 'react';
import cn from 'classnames';
import anime from 'animejs';

import s from './BookCard.css';

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
  const icon = useRef() as any;

  const container = useRef() as any;

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
      <img src={image} alt={title} className={s.image} />
      <div className={s.info}>
        <img src={logo} alt={title} className={s.logo} />
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
        <Link ref={container} onMouseEnter={handleOver} className={s.link} to={href}>
          <Text className={s.learn_more_text}>{'Learn more'}</Text>
          <InfoIcon ref={icon} />
        </Link>
      </div>
    </div>
  );
};
