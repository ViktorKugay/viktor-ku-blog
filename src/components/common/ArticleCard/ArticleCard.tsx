import React, {useRef, useCallback} from 'react';
import {Text} from '../../ui/Text/Text';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import anime from 'animejs';

import s from './ArticleCard.css';

import c from './config.json';

interface Props {
  id: string;
  title: string;
  image?: string;
  className?: string;
  description?: string;
  margin?: 'normal' | 'dense';
  mod?: 'large' | 'middle' | 'small';
}

export const ArticleCard: React.FC<Props> = ({
  id,
  title,
  image,
  className,
  description,
  mod = 'middle',
  margin = 'normal',
}) => {
  const container = useRef();
  const pathLinkTo = `/post/${id}`;
  const isLargeMod = mod === 'large';
  const alignTextBlock = mod === 'large' ? 'left' : 'center';
  const classNames = cn(s.root, s[`mod_${mod}`], s[`margin_${margin}`], className);
  const textContainerClassNames = cn(s.text_container, s[`text_container_${mod}`]);

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

  const renderDescriptionBlock = useCallback(
    () => (
      <Text mod="h4" align="justify">
        {description}
      </Text>
    ),
    [isLargeMod],
  );

  return (
    <Link
      ref={container}
      to={pathLinkTo}
      className={cn(s.link, classNames)}
      onMouseEnter={handleMoveUpPostCard}
      onMouseLeave={handleMoveDownPostCard}
    >
      <img className={s.image} src={image} alt={c.PostCard.postImageAlt} />
      <div className={textContainerClassNames}>
        <Text mod="h3" margin="normal" align={alignTextBlock}>
          {title}
        </Text>
        {isLargeMod && renderDescriptionBlock()}
      </div>
    </Link>
  );
};
