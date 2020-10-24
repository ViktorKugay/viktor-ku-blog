import React from 'react';
import {usePostPage} from './post.hook';

import {App} from '../../../components/app';

import {Footer} from '../../../components/common/footer/footer.component';
import {Header} from '../../../components/common/header/header.component';

import {BgBlue} from '../../ui/bg-blue/bg-blue.component';

import {SectionPost} from './sections/post/section-post.component';

import {Post} from '../../../types/types';

interface Props {
  post: Post;
}

export const PagePost: React.FC<Props> = ({post}) => {
  const state = usePostPage(post);

  if (state.status === 'init') {
    return null;
  }

  return (
    <App
      metaTitle={state.data.post.attributes.title}
      metaDescription={state.data.post.attributes.description}
      metaImage={state.data.post.attributes.image}
    >
      <BgBlue />
      <Header />
      <SectionPost post={post} metrics={state.data.metrics} />
      <Footer />
    </App>
  );
};
