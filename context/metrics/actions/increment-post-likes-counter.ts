import {Dispatch, SetStateAction} from 'react';
import {MetricsDocument} from '../../../firebase/firestore.types';

export const incrementPostLikesCounter = (setMetrics: Dispatch<SetStateAction<MetricsDocument>>) => (
  postId: string,
) => {
  setMetrics((prev) => ({
    ...prev,
    [postId]: {
      ...prev[postId],
      likes: prev[postId].likes + 1,
    },
  }));
};
