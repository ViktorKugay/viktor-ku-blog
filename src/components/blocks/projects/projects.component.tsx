import React from 'react';
import {Text} from '../../ui/text/text.component';
import {Container} from '../../ui/container/container.component';
import {ProjectCard} from './project-card/project-card.component';

import s from './projects.module.scss';
import c from './projects.config.json';

export const ProjectBlock: React.FC = () => {
  return (
    <div className={s.projects_background}>
      <Container wrap="wrap" justify="center" className={s.projects_container} id="projects">
        <Text className={s.projects_title} mod="h2" weight="700">
          {c.PackagesBlock.title}
        </Text>
        {c.PackagesBlock.items.map(({title, description, color, href}, index) => (
          <ProjectCard key={index} title={title} description={description} color={color} href={href} />
        ))}
      </Container>
    </div>
  );
};
