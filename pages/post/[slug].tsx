import {ArticlePage} from '../../components/pages/article-page/article-age.component';
import Head from 'next/head';

import articles from '../../content.json';

const Article: React.FC = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content={articles[0].attributes.id} />
        <meta property="og:description" content={articles[0].attributes.description} />
        <meta property="og:image" content={articles[0].attributes.image} />
        <meta property="og:url" content="https://vkugay.ru" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="vk:image" content={articles[0].attributes.image} />
      </Head>
      <ArticlePage />
    </>
  );
};

export default Article;
