import React from 'react';
import {Text} from '../../../../ui/text/text.component';
import {Container} from '../../../../ui/container/container.component';
import {CardPostPreviewLarge} from '../../../../cards/post/preview/large/card-post-preview-large.component';

import {Post, PostMetrics} from '../../../../../types/types';

import s from './section-post-latest.module.scss';

interface Props {
  post: Post;
  metrics: PostMetrics;
}

export const SectionPostLatest: React.FC<Props> = ({post, metrics: {likes, views}}) => {
  return (
    <Container align="start" margin="normal" className={s.root} id="blog">
      <Text className={s.title} margin="normal" display="block" weight="700" mod="h1" align="left">
        {'Latest Post'}
      </Text>
      <CardPostPreviewLarge
        id={post.attributes.id}
        title={post.attributes.title}
        subtitle={post.attributes.description}
        imageUrl={post.attributes.image}
        likesCount={likes}
        viewsCount={views}
      />
    </Container>
  );
};
