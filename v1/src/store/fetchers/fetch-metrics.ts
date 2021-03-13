import {State} from '@hookstate/core';
import {firestoreApi} from '../../services/firestore.api';
import {Store} from '../store';

export const fetchPostsMetrics = (s: State<Store>) => (): Promise<void> => {
  return firestoreApi.getPostsMetrics().then((postsMetrics) =>
    s.metrics.merge({
      posts: {
        status: 'success',
        data: postsMetrics,
      },
    }),
  );
};
