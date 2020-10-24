import {useEffect, useState} from 'react';
import {PostId, PostMetrics, Post, FetchStatus} from '../../../types/types';
import {scrollToElement} from 'src/utils/scroll-to-element';
import {useStore} from '../../../store/store';

import posts from '../../../../posts.json';

interface State {
  latestPost: {
    metrics: PostMetrics;
    content: Post;
  };
}

export function useMainPage(): FetchStatus<State> {
  const [state, setState] = useState<FetchStatus<State>>({
    status: 'init',
    data: undefined,
  });

  const store = useStore();

  // check if page need scroll to element
  useEffect(() => {
    // setTimeout needed to prevent code execution while first render
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        scrollToElement(hash.slice(1));
      }
    });
  }, []);

  // fetch all posts metrics
  useEffect(() => {
    store.fetchPostsMetrics();
  }, []);

  // await when metrics will be fetched and set main page state
  useEffect(() => {
    const postsMetrics = store.s.value.metrics.posts;
    if (postsMetrics.status === 'success') {
      const lastestPostMetrics = postsMetrics.data[PostId.queryString];
      setState({
        status: 'success',
        data: {
          latestPost: {
            metrics: lastestPostMetrics,
            content: posts[0] as Post,
          },
        },
      });
    }
  }, [store.s.value.metrics.posts.status]);

  return state;
}
