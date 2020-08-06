import {Dispatch, SetStateAction} from 'react';
import {MetricsDocument} from '../../../firebase/firestore.types';

export const incrementPostViewsCounter = (setMetrics: Dispatch<SetStateAction<MetricsDocument>>) => (
  postId: string,
) => {
  setMetrics((prev) => ({
    ...prev,
    [postId]: {
      ...prev[postId],
      views: prev[postId].views + 1,
    },
  }));
};
