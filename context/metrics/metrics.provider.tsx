import React, {useState, Dispatch, SetStateAction, useEffect} from 'react';
import {MetricsDocument} from '../../firebase/firestore.types';
import {metricsContext} from './metrics.context';

import {incrementPostLikesCounter} from './actions/increment-post-likes-counter';
import {incrementPostViewsCounter} from './actions/increment-posts-views-counter';
import {getPostMetricsById} from './selectors/get-post-metrics-by-id';

import firebase from '../../firebase/firestore.api';
import {extractFireStoreDocuments} from 'firebase/helpers/extract-firesotore-documents';

interface Props {
  value?: MetricsDocument;
}

export const transfrom = (metrics: MetricsDocument, setMetrics: Dispatch<SetStateAction<MetricsDocument>>) => ({
  getPostMetricsById: getPostMetricsById(metrics),
  incrementPostLikesCounter: incrementPostLikesCounter(setMetrics),
  incrementPostViewsCounter: incrementPostViewsCounter(setMetrics),
});

export const MetricsProvider: React.FC<Props> = ({children}) => {
  const [metrics, setMetrics] = useState<MetricsDocument>({});

  useEffect(() => {
    firebase
      .firestore()
      .collection('posts')
      .get()
      .then(extractFireStoreDocuments)
      .then((res) => setMetrics(res));
  }, []);

  return <metricsContext.Provider value={transfrom(metrics, setMetrics)}>{children}</metricsContext.Provider>;
};
