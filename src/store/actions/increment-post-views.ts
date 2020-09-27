import {State} from '@hookstate/core';
import {firestoreApi} from '../../services/firestore.api';
import {Store} from '../store';
import {PostId} from '../../types/types';
import errorNames from '../../constants/errors';

export const incrementPostViews = (s: State<Store>) => (postId: PostId): Promise<void> => {
  const postsMetrics = s.metrics.get().posts;
  if (postsMetrics.status === 'init') {
    throw new Error(errorNames.POSTS_METRICS_DOESNT_EXIST);
  }

  return firestoreApi.incrementPostViews(postId).then(() => {
    s.metrics.merge({
      posts: {
        status: 'success',
        data: {
          ...postsMetrics.data,
          [postId]: {
            ...postsMetrics.data[postId],
            views: postsMetrics.data[postId].views + 1,
          },
        },
      },
    });
  });
};
