import {PostContent} from '../../components/blocks/posts/post-content/post-content.component';
import {HeaderBlock} from '../../components/blocks/header/header.component';
import {FooterBlock} from '../../components/blocks/footer/footer.component';
import {NextPage} from 'next';
import Head from 'next/head';
import React from 'react';

import posts from '../../content.json';

interface Props {
  title: string;
  description: string;
  image: string;
  html: string;
}

const PostPage: NextPage<Props> = ({title, description, image, html}) => {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://vkugay.ru" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="vk:image" content={image} />
      </Head>
      <HeaderBlock>
        <PostContent title={title} description={description} image={image} html={html} />
        <FooterBlock />
      </HeaderBlock>
    </>
  );
};

PostPage.getInitialProps = (ctx): any => {
  const {postname} = ctx.query;

  const post = posts.find((p) => p.attributes.id === postname);
  if (!post) {
    ctx.res && ctx.res.writeHead(302, {Location: '/404'});
    ctx.res && ctx.res.end();

    return undefined;
  }

  return {
    title: post.attributes.title,
    description: post.attributes.description,
    image: post.attributes.image,
    html: post.html,
  };
};

export default PostPage;
