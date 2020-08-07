import {Dispatch, SetStateAction} from 'react';
import {MetricsDocument} from '../../../lib/firestore.types';

export const incrementPostViewsCounter = (
  metrics: MetricsDocument,
  setMetrics: Dispatch<SetStateAction<MetricsDocument>>,
) => (postId: string) => {
  const postMetrics = metrics[postId];
  if (postMetrics) {
    setMetrics((prev) => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        views: prev[postId].views + 1,
      },
    }));
  }
};
