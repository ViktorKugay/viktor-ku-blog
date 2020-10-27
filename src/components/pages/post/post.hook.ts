import {useEffect, useState} from 'react';
import {useStore} from '../../../store/store';
import {PostMetrics, Post, FetchStatus} from '../../../types/types';

interface State {
  metrics: PostMetrics;
  post: Post;
}

export function usePostPage(post: Post): FetchStatus<State> {
  const [state, setState] = useState<FetchStatus<State>>({
    status: 'init',
    data: {
      post,
      metrics: {
        views: 0,
        likes: 0,
      },
    },
  });

  const store = useStore();
  const postsMetrics = store.selectPostsMetrics();

  useEffect(() => {
    store.fetchPostsMetrics();
  }, []);

  useEffect(() => {
    if (postsMetrics.status === 'success') {
      store.incrementPostViews(post.attributes.id);
      setState({
        status: 'success',
        data: {
          metrics: postsMetrics.data[post.attributes.id],
          post: post,
        },
      });
    }
  }, [postsMetrics.status]);

  return state;
}
