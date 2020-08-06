import {PostContent} from '../../components/blocks/posts/post-content/post-content.component';
import {HeaderBlock} from '../../components/blocks/header/header.component';
import {FooterBlock} from '../../components/blocks/footer/footer.component';
import {App} from '../../components/app';
import {Post} from '../../types/types';
import ErrorPage from 'next/error';
import NextHead from 'next/head';
import {NextPage} from 'next';
import React from 'react';

import posts from '../../content.json';

interface Props {
  post?: Post;
}

const renderHead = (post: Post) => (
  <NextHead>
    <meta property="og:title" content={post.attributes.title} />
    <meta property="og:description" content={post.attributes.description} />
    <meta property="og:image" content={post.attributes.image} />
    <meta property="og:url" content="https://vkugay.ru" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="ru_RU" />
    <meta property="vk:image" content={post.attributes.image} />
  </NextHead>
);

const PostPage: NextPage<Props> = ({post}) => {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <App>
      <HeaderBlock>
        <PostContent post={post} />
        <FooterBlock />
      </HeaderBlock>
    </App>
  );
};

PostPage.getInitialProps = (ctx) => {
  const post = posts.find((p) => p.attributes.id === ctx.query.id);

  return {post};
};

export default PostPage;
