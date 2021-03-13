import {LOCAL_STORAGE_LIKED_POST_KEY} from '../../constants/constants';
import {getParsedLocalStorageValue} from '../../utils/local-storage';

export const selectLikedPosts = () => (): string[] => {
  return getParsedLocalStorageValue(LOCAL_STORAGE_LIKED_POST_KEY, []);
};
