import React, {useEffect} from 'react';
import {useMetricsStore} from '../store/store';

import '../styles/post.scss';
import '../styles/prism.scss';
import '../styles/reboot.scss';
import '../styles/variables.scss';

// @See https://nextjs.org/docs/advanced-features/custom-apphttps://nextjs.org/docs/advanced-features/custom-app
export default function CustomApp({Component, pageProps}: any) {
  const metricsStore = useMetricsStore();

  useEffect(() => {
    metricsStore.fetchPostsMetricsSourceMap();
  }, []);

  return <Component {...pageProps} />;
}
