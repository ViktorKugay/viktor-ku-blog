import {getParsedLocalStorageValue, setLocalStorageValue} from '../../utils/local-storage';
import {LOCAL_STORAGE_LIKED_POST_KEY} from '../../constants/constants';
import {PostId} from '../../types/types';

export const setPostLiked = () => (postId: PostId): void => {
  const state = getParsedLocalStorageValue(LOCAL_STORAGE_LIKED_POST_KEY, []);
  setLocalStorageValue(LOCAL_STORAGE_LIKED_POST_KEY, [...state, postId]);
};
