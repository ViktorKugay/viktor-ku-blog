import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Text} from '../../ui/Text/Text';
import React, {useRef} from 'react';
import anime from 'animejs';

import s from './ProjectCard.css';

interface Props {
  href: string;
  title: string;
  color: string;
  description: string;
}

export const ProjectCard: React.FC<Props> = ({title, description, color, href}) => {
  const container = useRef();
  const linkTarget = '_blank';
  const linkRel = 'noopener noreferrer';

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
    <a
      href={href}
      rel={linkRel}
      ref={container}
      className={s.root}
      target={linkTarget}
      onMouseEnter={handleOver}
      onMouseLeave={handleDown}
    >
      <div style={{background: color}} className={s.left_side_color} />
      <div className={s.content}>
        <Text mod="h3" weight="700" className={s.title}>
          {title}
        </Text>
        <Text mod="p" whiteSpace="preWrap">
          {description}
        </Text>
        <ArrowForwardIcon className={s.arrow} />
      </div>
    </a>
  );
};
