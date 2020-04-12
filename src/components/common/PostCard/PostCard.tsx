import {Text} from '../../ui/Text/Text';
import {Link} from 'react-router-dom';
import React, {useRef} from 'react';
import cn from 'classnames';
import anime from 'animejs';

import s from './PostCard.css';

interface Props {
  className?: string;
  title: string;
  description?: string;
  image?: any;
  margin?: 'normal' | 'dense';
  mod?: 'large' | 'middle' | 'small';
}

export const PostCard: React.FC<Props> = ({
  className,
  title,
  image,
  margin = 'normal',
  description,
  mod = 'middle',
}) => {
  const classNames = cn(s.root, s[`mod_${mod}`], s[`margin_${margin}`], className);

  const isLargeMod = mod === 'large';

  const container = useRef() as any;

  const handleOver = () => {
    anime({
      targets: container.current,
      scale: 1.03,
      duration: 3000,
    });
  };

  const handleDown = () => {
    anime({
      targets: container.current,
      scale: 1,
      duration: 3000,
    });
  };

  return (
    <Link
      className={cn(s.link, classNames)}
      ref={container}
      onMouseEnter={handleOver}
      onMouseLeave={handleDown}
      to="/post"
    >
      {image && <img className={s.image} src={image} alt="alt" />}
      <div className={cn(s[`text_container_${mod}`])}>
        <Text mod="h3" margin="normal" align={mod === 'large' ? 'left' : 'center'}>
          {title}
        </Text>
        {isLargeMod && (
          <Text mod="h4" align="justify">
            {description}
          </Text>
        )}
      </div>
    </Link>
  );
};
