import {State} from '@hookstate/core';
import {PostsMetricsSourceMap} from 'src/types/types';
import {firestoreApi} from 'src/firestore/firestore.api';

export const incrementPostLikesCounter = (s: State<PostsMetricsSourceMap>) => async (postId: string) => {
  const postMetrics = s[postId].get();
  if (postMetrics) {
    return firestoreApi.incrementPostLikesCounter(postId).then(() => {
      s.set({
        [postId]: {
          ...postMetrics,
          likes: postMetrics.likes + 1,
        },
      });
    });
  }
};
