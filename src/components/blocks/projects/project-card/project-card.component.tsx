import React, {useRef} from 'react';
import {ArrowForward} from '@material-ui/icons';
import {Text} from '../../../ui/text/text.component';
import {ProjectSourceMap} from '../../../../types/types';

import s from './project-card.module.scss';

interface Props {
  project: ProjectSourceMap;
}

export const ProjectCard: React.FC<Props> = ({project}) => {
  const container = useRef<HTMLAnchorElement>(null);

  const handleOver = () => {
    if (container.current) {
      container.current.classList.add(s.scaled_project_card);
    }
  };

  const handleDown = () => {
    if (container.current) {
      container.current.classList.remove(s.scaled_project_card);
    }
  };

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={project.href}
      ref={container}
      className={s.root}
      onMouseEnter={handleOver}
      onMouseLeave={handleDown}
    >
      <div style={{background: project.color}} className={s.left_side_color} />
      <div className={s.content}>
        <Text mod="h3" weight="700" className={s.title}>
          {project.title}
        </Text>
        <Text mod="p" whiteSpace="preWrap">
          {project.description}
        </Text>
        <ArrowForward className={s.arrow} />
      </div>
    </a>
  );
};
