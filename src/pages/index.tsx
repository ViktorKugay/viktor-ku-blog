import React from 'react';
import {Document} from '../components/App';
import {PageMainHead, PageMainBody} from '../components/pages/main/Main';

export default function PageMain() {
  return <Document DocumentHead={PageMainHead} DocumentBody={PageMainBody} />;
}
