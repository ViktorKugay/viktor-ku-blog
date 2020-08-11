import {PostContent} from '../../components/blocks/posts/post-content/post-content.component';
import {HeaderBlock} from '../../components/blocks/header/header.component';
import {FooterBlock} from '../../components/blocks/footer/footer.component';
import {PostContentSourceMap} from '../../types/types';
import {NextPage, NextPageContext} from 'next';
import {App} from '../../components/app';
import ErrorPage from 'next/error';
import React from 'react';

import posts from '../../../posts.json';

interface IHead {
  postContentSourceMap: PostContentSourceMap;
}

const Head: React.FC<IHead> = ({postContentSourceMap}) => {
  const {attributes} = postContentSourceMap;

  return (
    <>
      <meta property="og:title" content={attributes.title} />
      <meta property="og:description" content={attributes.description} />
      <meta property="og:image" content={attributes.image} />
      <meta property="og:url" content="https://vkugay.ru" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="vk:image" content={attributes.image} />
    </>
  );
};

interface IPostPage {
  postContentSourceMap: PostContentSourceMap | undefined;
}

const PostPage: NextPage<IPostPage> = ({postContentSourceMap}) => {
  if (!postContentSourceMap) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <App headInnerComponent={<Head postContentSourceMap={postContentSourceMap} />}>
      <HeaderBlock>
        <PostContent postContentSourceMap={postContentSourceMap} />
        <FooterBlock />
      </HeaderBlock>
    </App>
  );
};

PostPage.getInitialProps = (ctx: NextPageContext): IPostPage => {
  const postContentSourceMap = posts.find((p) => p.attributes.id === ctx.query.postname);

  return {
    postContentSourceMap,
  };
};

export default PostPage;
