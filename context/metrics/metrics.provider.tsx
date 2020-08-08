import React, {useState, Dispatch, SetStateAction, useEffect} from 'react';
import {MetricsDocument} from '../../lib/firestore.types';
import {metricsContext} from './metrics.context';
import {useAsync} from 'react-use';
// import axios from 'axios';

import {incrementPostLikesCounter} from './actions/increment-post-likes-counter';
import {incrementPostViewsCounter} from './actions/increment-posts-views-counter';
import {getPostMetricsById} from './selectors/get-post-metrics-by-id';
import {firestoreApi} from 'lib/firestore.api';

interface Props {
  value?: MetricsDocument;
}

// const fetcher = async () => {
//   const response = await axios.get('/api/metrics');

//   return response.data;
// };

export const transfrom = (metrics: MetricsDocument, setMetrics: Dispatch<SetStateAction<MetricsDocument>>) => ({
  getPostMetricsById: getPostMetricsById(metrics),
  incrementPostLikesCounter: incrementPostLikesCounter(metrics, setMetrics),
  incrementPostViewsCounter: incrementPostViewsCounter(metrics, setMetrics),
});

export const MetricsProvider: React.FC<Props> = ({children}) => {
  const [metrics, setMetrics] = useState<MetricsDocument>({});

  useEffect(() => {
    firestoreApi.getPostsMetrics().then(setMetrics);
  }, []);

  return <metricsContext.Provider value={transfrom(metrics, setMetrics)}>{children}</metricsContext.Provider>;
};
