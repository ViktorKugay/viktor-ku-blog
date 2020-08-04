import React, {useRef} from 'react';
import {Text} from '../../../ui/text/text.component';
import Link from 'next/link';
import cn from 'classnames';
import anime from 'animejs';

import s from './post-card.module.scss';
import c from './post-card.config.json';

interface Props {
  id: string;
  title: string;
  image?: string;
  className?: string;
  description?: string;
  margin?: 'normal' | 'dense';
  mod?: 'large' | 'middle' | 'small';
}

export const PostCard: React.FC<Props> = ({
  id,
  title,
  image,
  className,
  description,
  mod = 'middle',
  margin = 'normal',
}) => {
  const container = useRef(null);

  const isLargeMod = mod === 'large';
  const alignTextBlock = mod === 'large' ? 'left' : 'center';

  const handleMoveUpPostCard = () => {
    anime({
      targets: container.current,
      scale: 1.03,
      duration: 3000,
    });
  };

  const handleMoveDownPostCard = () => {
    anime({
      targets: container.current,
      scale: 1,
      duration: 3000,
    });
  };

  const renderDescriptionBlock = () => (
    <Text mod="h4" align="justify">
      {description}
    </Text>
  );

  return (
    <Link href={`/post/${id}`}>
      <div
        ref={container}
        role="article"
        className={cn(s.root, s.link, s[`mod_${mod}`], s[`margin_${margin}`], className)}
        onMouseEnter={handleMoveUpPostCard}
        onMouseLeave={handleMoveDownPostCard}
      >
        <img className={s.image} src={image} alt={c.PostCard.postImageAlt} />
        <div className={cn(s.text_container, s[`text_container_${mod}`])}>
          <Text mod="h3" margin="normal" align={alignTextBlock}>
            {title}
          </Text>
          {isLargeMod && renderDescriptionBlock()}
        </div>
      </div>
    </Link>
  );
};
