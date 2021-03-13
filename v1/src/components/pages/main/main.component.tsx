import React from 'react';

import {App} from '../../app';

import {Header} from '../../common/header/header.component';
import {Footer} from '../../common/footer/footer.component';

import {BgBlue} from '../../ui/bg-blue/bg-blue.component';

import {SectionPostLatest} from './sections/post-latest/section-post-latest.component';
import {SectionBiography} from './sections/biography/section-biography.component';
import {SectionProjects} from './sections/projects/section-projects.component';
import {SectionBooks} from './sections/books/section-books.component';

import {useMainPage} from './main.hook';

import s from './main.module.scss';

export const MainPage: React.FC = () => {
  const state = useMainPage();

  return (
    <>
      <BgBlue />
      <Header />
      <main>
        <SectionBiography />
        <SectionPostLatest
          metrics={state.data.latestPost.metrics}
          post={state.data.latestPost.content}
        />
        <SectionProjects />
        <SectionBooks />
      </main>
      <Footer />
    </>
  );
};
