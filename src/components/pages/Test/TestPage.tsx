import React from 'react';
import { SocialsSideBar } from '../../../components/common/SocialsSideBar/SocialsSideBar';

import s from './TestPage.module.scss';

export const TestPage: React.FC = () => {
  return (
    <div className={s.root}>
        <SocialsSideBar />
    </div>
  );
};
