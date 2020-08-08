import {useState, State, createState} from '@hookstate/core';
import {PostsMetricsSourceMap} from '../types/types';

import {fetchPostsMetricsSourceMap} from './actions/fetch-posts-metrics-source-map';
import {incrementPostLikesCounter} from './actions/increment-post-likes-counter';
import {incrementPostViewsCounter} from './actions/increment-post-views-counter';
import {getPostMetricsById} from './selectors/get-post-metrics-by-id';

export const transfrom = (s: State<PostsMetricsSourceMap>) => ({
  // === selectors ===
  getPostMetricsById: getPostMetricsById(s),
  // === fetchers ===
  fetchPostsMetricsSourceMap: fetchPostsMetricsSourceMap(s),
  // === actions ===
  incrementPostLikesCounter: incrementPostLikesCounter(s),
  incrementPostViewsCounter: incrementPostViewsCounter(s),
});

const globalState = createState<PostsMetricsSourceMap>({});

export const useMetricsStore = () => transfrom(useState(globalState));
