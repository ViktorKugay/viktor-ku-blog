import {useState, State, createState} from '@hookstate/core';
import {Metrics} from '../types/types';
// fetchers
import {fetchPostsMetrics} from './fetchers/fetch-metrics';
// actions
import {setPostLiked} from './actions/set-post-liked';
import {incrementPostLikes} from './actions/increment-post-likes';
import {incrementPostViews} from './actions/increment-post-views';
// selectors
import {selectLikedPosts} from './selectors/select-liked-posts';
import {selectPostsMetrics} from './selectors/select-posts-metrics';

import {createInitFetchStatus} from '../utils/create-init-fetch-status';

export interface Store {
  metrics: Metrics;
}

export const transfrom = (s: State<Store>) => ({
  s: s,
  // === selectors ===
  selectLikedPosts: selectLikedPosts(),
  selectPostsMetrics: selectPostsMetrics(s),
  // === fetchers ===
  fetchPostsMetrics: fetchPostsMetrics(s),
  // === actions ===
  setPostLiked: setPostLiked(),
  incrementPostLikes: incrementPostLikes(s),
  incrementPostViews: incrementPostViews(s),
});

const globalState = createState<Store>({
  metrics: {
    posts: createInitFetchStatus(),
  },
});

export const useStore = () => transfrom(useState(globalState));
