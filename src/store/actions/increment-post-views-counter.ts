import {State} from '@hookstate/core';
import {PostsMetricsSourceMap} from '../../types/types';
import {firestoreApi} from '../../firestore/firestore.api';

export const incrementPostViewsCounter = (s: State<PostsMetricsSourceMap>) => async (postId: string): Promise<void> => {
  const postMetrics = s[postId].get();
  if (postMetrics) {
    return firestoreApi.incrementPostViewsCounter(postId).then(() => {
      s.merge({
        [postId]: {
          ...postMetrics,
          views: postMetrics.views + 1,
        },
      });
    });
  }
};
