import Head from 'next/head';
import React from 'react';

interface Props {
  DocumentHead: React.FC;
  DocumentBody: React.FC;
}

export const Document: React.FC<Props> = ({DocumentHead, DocumentBody}) => {
  return (
    <>
      <Head>
        <DocumentHead />
      </Head>
      <DocumentBody />
    </>
  );
};
