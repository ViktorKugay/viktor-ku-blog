import React from 'react';
import {Post, PostMetrics} from '../../../../../types/types';
import {CardPostContent} from '../../../../../components/cards/post/content/card-post-content.component';
import {Metrics} from '../../../../common/metrics/metrics.component';

import s from './section-post.module.scss';

interface Props {
  post: Post;
  metrics: PostMetrics;
}

export const SectionPost: React.FC<Props> = ({post, metrics}) => (
  <section className={s.root}>
    <CardPostContent
      postId={post.attributes.id}
      title={post.attributes.title}
      subtitle={post.attributes.description}
      imageUrl={post.attributes.image}
      html={post.html}
    />
    <Metrics postId={post.attributes.id} likesCount={metrics.likes} viewsCount={metrics.views} />
  </section>
);
