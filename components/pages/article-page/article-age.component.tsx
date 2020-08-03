import {SubscribeForm} from '../../common/subscribe-form/subscribe-form.component';
import {Container} from '../../ui/container/container.component';
import {Article} from '../../common/article/article.component';
import {Socials} from '../../common/socials/socials.component';
import {Header} from '../../common/header/header.component';
import React from 'react';

import articles from '../../../content.json';

import s from './article-page.module.scss';

export const ArticlePage: React.FC = () => {
  const article = articles[0];

  return (
    <Header>
      <Article
        title={article.attributes.title}
        description={article.attributes.description}
        image={article.attributes.image}
        html={article.html}
      />
      <Container wrap="wrap" justify="space-between" align="start" className={s.newsletter_container} id="newsletter">
        <SubscribeForm />
        <Socials />
      </Container>
    </Header>
  );
};
