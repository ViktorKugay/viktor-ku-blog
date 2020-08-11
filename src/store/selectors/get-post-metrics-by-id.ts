import {PostsMetricsSourceMap, PostMetrics} from '../../types/types';
import {State} from '@hookstate/core';

export const getPostMetricsById = (s: State<PostsMetricsSourceMap>) => (postId: string): PostMetrics | undefined => {
  return s[postId].get();
};
