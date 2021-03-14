import React from 'react';
import {AppProps} from 'next/app';

import '../styles/reboot.scss';
import '../styles/variables.scss';
import '../styles/fonts.scss';

// @See https://nextjs.org/docs/advanced-features/custom-apphttps://nextjs.org/docs/advanced-features/custom-app
const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export default App;
