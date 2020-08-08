import {PostsMetricsSourceMap} from '../../types/types';
import {State} from '@hookstate/core';

export const getPostMetricsById = (s: State<PostsMetricsSourceMap>) => (postId: string) => {
  return s[postId].get();
};
