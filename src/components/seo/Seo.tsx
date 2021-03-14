import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
}

export const Seo: React.FC<Props> = ({title = 'Viktor Kugay', description = 'Awesome page'}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};
