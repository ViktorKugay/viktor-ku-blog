import React, {lazy} from 'react';
import {Text} from '../../ui/Text/Text';
import cn from 'classnames';

import s from './MainPage.module.scss';

// используем React.lazy, потому что иначе не будет работать импорт утилит из threejs
// @See https://github.com/pmndrs/react-three-fiber/discussions/504
const ReactThreeFiberFlyingPoints = lazy(() =>
  import('../../gl/ReactThreeFiberFlyingPoints/ReactThreeFiberFlyingPoints'),
);

export const MainPage: React.FC = () => {
  return (
    <div className={s.layout}>
      <ReactThreeFiberFlyingPoints />

      <header className={s.header_container}>
        <img alt="Logo Image" src="/logo.png" className={s.header_logoImage} />

        <nav className={s.header_navigation_container}>
          <ul className={s.header_navigation_listContainer}>
            <li>
              {/* prettier-ignore */}
              <a className={s.header_navigation_link}>
                {'Expertise'}
              </a>
            </li>
            <li>
              <a className={cn(s.header_navigation_link, s.header_navigation_link_outlined)}>
                {'Articles'}
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={s.main_container}>
        <section className={s.main_section_title}>
          <Text color="white" mod="h1" className={s.main_section_title_text} textAlign="center">
            {'JavaScript TypeScript\nFull Stack Developing'}
          </Text>
        </section>

        <section className={s.main_section_socials}>
          <div className={s.main_section_socials_line} />

          <div className={s.main_section_socials_container}>
            {/* prettier-ignore */}
            <img 
              src="/socials/linkedin.svg" 
              className={s.main_section_socials_logo} 
            />
            <div className={s.main_section_socials_logo_github} />
            {/* prettier-ignore */}
            <img 
              src="/socials/twitter.svg" 
              className={s.main_section_socials_logo} 
            />
          </div>
        </section>
      </main>
    </div>
  );
};
