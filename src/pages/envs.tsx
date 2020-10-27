import React from 'react';
import {NextPage} from 'next';

interface Props {
  envs: any;
}

export const EnvsPage: NextPage<Props> = ({envs}) => {
  return <>{JSON.stringify(envs, null, 2)}</>;
};

EnvsPage.getInitialProps = () => ({
  envs: process.env,
});

export default EnvsPage;
