import React from 'react';
import ErrorPage from 'next/error';
import {NextPage, NextPageContext} from 'next';
import {PagePost} from '../../components/pages/post/post.component';
import {Post} from '../../types/types';
import Head from 'next/head';

import posts from '../../../posts.json';

interface Props {
  post: Post | undefined;
}

const PostPage: NextPage<Props> = ({post}) => {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{'Kugay Blog'}</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,700;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta property="og:title" content={post.attributes.title} />
        <meta property="og:description" content={post.attributes.description} />
        <meta property="og:image" content={post.attributes.image} />
        <meta property="og:url" content="https://vkugay.ru" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="vk:image" content={post.attributes.image} />
      </Head>
      <PagePost post={post} />
    </>
  );
};

PostPage.getInitialProps = (ctx: NextPageContext): Props => ({
  post: posts.find((post) => post.attributes.id === ctx.query.postId) as Post,
});

export default PostPage;
