import React from 'react';
import ErrorPage from 'next/error';
import {NextPage, NextPageContext} from 'next';
import {PagePost} from '../../components/pages/post/post.component';
import {Post} from '../../types/types';

import posts from '../../../posts.json';

interface Props {
  post: Post | undefined;
}

const PostPage: NextPage<Props> = ({post}) => {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return <PagePost post={post} />;
};

PostPage.getInitialProps = (ctx: NextPageContext): Props => ({
  post: posts.find((post) => post.attributes.id === ctx.query.postId) as Post,
});

export default PostPage;
