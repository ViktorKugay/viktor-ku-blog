import anime from 'animejs';
import React, {useRef} from 'react';
import {ArrowForward} from '@material-ui/icons';
import {Text} from '../../../ui/text/text.component';

import s from './project-card.module.scss';

interface Props {
  href: string;
  title: string;
  color: string;
  description: string;
}

export const ProjectCard: React.FC<Props> = ({title, description, color, href}) => {
  const container = useRef(null);

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
      ref={container}
      className={s.root}
      rel={'noopener noreferrer'}
      target={'_blank'}
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
        <ArrowForward className={s.arrow} />
      </div>
    </a>
  );
};
