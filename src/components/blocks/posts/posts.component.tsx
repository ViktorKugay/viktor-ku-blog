import React from 'react';
import Link from 'next/link';
import {ArrowForward} from '@material-ui/icons';
import {Text} from '../../ui/text/text.component';
import {PostCard} from './post-card/post-card.component';
import {PostContentSourceMap} from '../../../types/types';
import {Container} from '../../ui/container/container.component';

import posts from '../../../../content.json';

import s from './posts.module.scss';
import c from './posts.config.json';

const renderPostCard = (post: PostContentSourceMap, index: number) => (
  <PostCard mod="small" key={index} margin="normal" post={post} />
);

export const PostsBlock: React.FC = () => {
  return (
    <Container wrap="wrap" justify="space-between" className={s.posts_container}>
      {posts.reverse().map(renderPostCard)}
      <Link className={s.show_post_link} href="/posts">
        <Text>{c.Posts.title}</Text>
        <ArrowForward />
      </Link>
    </Container>
  );
};
