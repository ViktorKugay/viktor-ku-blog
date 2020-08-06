import {MetricsDocument} from '../../../firebase/firestore.types';

export const getPostMetricsById = (metrics: MetricsDocument) => (postId: string) => {
  return metrics[postId];
};
