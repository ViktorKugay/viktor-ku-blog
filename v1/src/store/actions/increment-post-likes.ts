import {State} from '@hookstate/core';
import {firestoreApi} from '../../services/firestore.api';
import {Store} from '../store';
import {PostId} from '../../types/types';
import errorNames from '../../constants/errors';

export const incrementPostLikes = (s: State<Store>) => (postId: PostId): Promise<void> => {
  const postsMetrics = s.metrics.get().posts;
  if (postsMetrics.status === 'init') {
    throw new Error(errorNames.POSTS_METRICS_DOESNT_EXIST);
  }

  return firestoreApi.incrementPostLikes(postId).then(() => {
    s.metrics.merge({
      posts: {
        status: 'success',
        data: {
          ...postsMetrics.data,
          [postId]: {
            ...postsMetrics.data[postId],
            likes: postsMetrics.data[postId].likes + 1,
          },
        },
      },
    });
  });
};
