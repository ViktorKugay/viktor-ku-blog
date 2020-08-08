import {PostsMetricsSourceMap} from '../../types/types';
import {State} from '@hookstate/core';
import {firestoreApi} from 'src/firestore/firestore.api';

export const incrementPostViewsCounter = (s: State<PostsMetricsSourceMap>) => (postId: string) => {
  const postMetrics = s[postId].get();
  if (postMetrics) {
    firestoreApi.incrementPostViewsCounter(postId).then(() => {
      s.merge({
        [postId]: {
          ...postMetrics,
          views: postMetrics.views + 1,
        },
      });
    });
  }
};
