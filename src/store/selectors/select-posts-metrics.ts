import {State} from '@hookstate/core';
import {FetchStatus, PostId, PostMetrics} from '../../types/types';
import {Store} from '../store';

export const selectPostsMetrics = (s: State<Store>) => (): FetchStatus<
  Record<PostId, PostMetrics>
> => {
  return s.value.metrics.posts;
};
