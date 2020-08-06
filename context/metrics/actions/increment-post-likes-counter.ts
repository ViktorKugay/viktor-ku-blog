import {Dispatch, SetStateAction} from 'react';
import {MetricsDocument} from '../../../firebase/firestore.types';

export const incrementPostLikesCounter = (
  metrics: MetricsDocument,
  setMetrics: Dispatch<SetStateAction<MetricsDocument>>,
) => (postId: string) => {
  const postMetrics = metrics[postId];
  if (postMetrics) {
    setMetrics((prev) => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        likes: prev[postId].likes + 1,
      },
    }));
  }
};
