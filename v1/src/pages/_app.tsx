import React from 'react';

import '../styles/post.scss';
import '../styles/prism.scss';
import '../styles/reboot.scss';
import '../styles/variables.scss';

// @See https://nextjs.org/docs/advanced-features/custom-apphttps://nextjs.org/docs/advanced-features/custom-app
export default function CustomApp({Component, pageProps}: any) {
  return <Component {...pageProps} />;
}
