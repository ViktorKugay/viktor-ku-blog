import {State} from '@hookstate/core';
import {PostsMetricsSourceMap} from '../../types/types';
import {firestoreApi} from '../../firestore/firestore.api';

export const incrementPostLikesCounter = (s: State<PostsMetricsSourceMap>) => async (postId: string): Promise<void> => {
  const postMetrics = s[postId].get();
  if (postMetrics) {
    return firestoreApi.incrementPostLikesCounter(postId).then(() => {
      s.merge({
        [postId]: {
          ...postMetrics,
          likes: postMetrics.likes + 1,
        },
      });
    });
  }
};
