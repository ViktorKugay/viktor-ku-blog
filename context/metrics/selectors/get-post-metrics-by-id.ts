import {MetricsDocument} from '../../../lib/firestore.types';

export const getPostMetricsById = (metrics: MetricsDocument) => (postId: string) => {
  return metrics[postId];
};
