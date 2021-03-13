import React from 'react';
import {AppProps} from 'next/app';

import '../styles/reboot.scss';
import '../styles/variables.scss';
import '../styles/fonts.scss';

// @See https://nextjs.org/docs/advanced-features/custom-apphttps://nextjs.org/docs/advanced-features/custom-app
export default function CustomApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}
