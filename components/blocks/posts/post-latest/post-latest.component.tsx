import React from 'react';
import {Text} from '../../../ui/text/text.component';
import {Container} from '../../../ui/container/container.component';
import {PostCard} from '../post-card/post-card.component';

import posts from '../../../../content.json';

import s from './post-latest.module.scss';
import c from './post-latest.config.json';

export const PostLatest: React.FC = () => {
  return (
    <Container align="start" margin="normal" className={s.latest_post} id="blog">
      <Text className={s.latest_post_title} margin="normal" display="block" weight="700" mod="h1" align="left">
        {c.PostLatest.title}
      </Text>
      <PostCard mod="large" post={posts[0]} />
    </Container>
  );
};
