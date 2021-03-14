import Document, {Html, Head, Main, NextScript} from 'next/document';

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index, follow" />
          <meta key="googlebot" name="googlebot" content="index,follow" />
          <meta name="google" content="notranslate" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="keywords" content="nextjs, realworld" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="next-realworld" />
          <meta property="og:title" content="Next.js realworld example app" />
          <meta
            property="og:description"
            content="Next.js + SWR codebase containing realworld examples"
          />
          <meta property="og:url" content="https://next-realworld.now.sh/" />
          <meta property="og:image" content="https://next-realworld.now.sh/images/share-link.png" />
          <meta property="twitter:card" content="next-realworld" />
          <meta property="twitter:url" content="https://next-realworld.now.sh/" />
          <meta property="twitter:title" content="Next.js realworld example app" />
          <meta
            property="twitter:description"
            content="Next.js + SWR codebase containing realworld examples"
          />
          <meta property="twitter:image" content="https://machimban.com/images/talk-link.jpg" />
          <meta name="msapplication-TileColor" content="#000" />
          <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
          <meta name="theme-color" content="#000" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
