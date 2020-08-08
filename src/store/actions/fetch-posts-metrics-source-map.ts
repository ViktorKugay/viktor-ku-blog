import {State} from '@hookstate/core';
import {PostsMetricsSourceMap} from '../../types/types';
import {firestoreApi} from '../../firestore/firestore.api';

export const fetchPostsMetricsSourceMap = (s: State<PostsMetricsSourceMap>) => () => {
  firestoreApi.getPostsMetricsSourceMap().then((r) => s.set(r));
};
