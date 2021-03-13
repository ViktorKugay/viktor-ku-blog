import React from 'react';
import {Text} from '../../../../ui/text/text.component';
import {Container} from '../../../../ui/container/container.component';
import {CardProject} from '../../../../cards/project/card-project.component';

import config from './section-projects.config.json';

import s from './section-projects.module.scss';

export const SectionProjects: React.FC = () => {
  return (
    <section className={s.root}>
      <Container id="projects" wrap="wrap" justify="center" className={s.container}>
        <Text className={s.title} mod="h2" weight="700">
          {config.title}
        </Text>
        {config.items.map(({color, description, href, title}, index) => (
          <CardProject
            key={index}
            title={title}
            linkUrl={href}
            bgColor={color}
            subtitle={description}
          />
        ))}
      </Container>
    </section>
  );
};
