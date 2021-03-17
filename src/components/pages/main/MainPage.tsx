import React, {lazy, useEffect, useRef} from 'react';
import {Text} from '../../ui/Text/Text';
import {motion, useTransform, useViewportScroll, useAnimation} from 'framer-motion';
import { SocialsSideBar } from '../../../components/common/SocialsSideBar/SocialsSideBar';
import {useInView} from 'react-intersection-observer';
import cn from 'classnames';

import s from './MainPage.module.scss';

import './MainPage.module.scss';

// используем React.lazy, потому что иначе не будет работать импорт утилит из threejs
// @See https://github.com/pmndrs/react-three-fiber/discussions/504
const ReactThreeFiberFlyingPoints = lazy(() =>
  import('../../gl/ReactThreeFiberFlyingPoints/ReactThreeFiberFlyingPoints'),
);

const BoxVariants1 = {
  visible: {opacity: 1, x: 0, transition: {duration: 1}},
  hidden: {opacity: 0, x: 300},
};

const BoxVariants2 = {
  visible: {opacity: 1, x: 900, transition: {duration: 1}},
  hidden: {opacity: 0, x: 0},
};

const BoxVariants3 = {
  visible: {opacity: 1, x: 0, transition: {duration: 1}},
  hidden: {opacity: 0, x: 300},
};

const BoxVariants = {
  visible: {opacity: 1},
  hidden: {
    opacity: 0,
    transition: {duration: 1.5}
  },
};

const container = {
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: {y: 20, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const MainPage: React.FC = () => {
  const {scrollY} = useViewportScroll();

  const translateXFirst = useTransform(scrollY, (value) => value * 2);
  const translateXSecond = useTransform(scrollY, (value) => value * -2);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  const prevScrollY = useRef(0);

  const {scrollYProgress} = useViewportScroll();

  const controls = useAnimation();

  useEffect(() => {
    scrollYProgress.onChange((scrollY) => {
      if (scrollY.toFixed(2) === '0.02') {
        prevScrollY.current > scrollY ? controls.start('visible') : controls.start('hidden');
      }

      prevScrollY.current = scrollY;
    });
  }, []);

  useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start('visible');
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start('visible');
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls3.start('visible');
    }
  }, [controls4, inView4]);

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className={s.layout}>
      <motion.div 
        className={s.gl_container}
        animate={controls}
        initial="visible"
        variants={BoxVariants}
      >
        <ReactThreeFiberFlyingPoints />
      </motion.div>
      

      <motion.header className={s.header_container} variants={item}>
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
      </motion.header>

      <main className={s.main_container}>
        <div className={s.main_firstPage_container}>
          <motion.section
            className={s.main_section_title}
            variants={item}
            style={{
              translateX: translateXSecond,
            }}
          >
            <Text color="white" mod="h1" className={s.main_section_title_text} textAlign="center">
              {'JavaScript TypeScript\nFull Stack Development'}
            </Text>
          </motion.section>

          <motion.section
            className={s.main_section_socials}
            variants={item}
            style={{
              translateX: translateXFirst,
            }}
          >
            <div className={s.main_section_socials_line} />

            <div className={s.main_section_socials_container}>
              {/* prettier-ignore */}
              <motion.img 
              src="/socials/linkedin.svg"
              whileHover={{scale: 1.2}}
              className={s.main_section_socials_logo} 
            />
              <motion.img
                src="/socials/github.svg"
                className={s.main_section_socials_logo_github}
                whileHover={{height: 200, top: 0}}
              />
              {/* prettier-ignore */}
              <motion.img 
              src="/socials/twitter.svg"
              whileHover={{scale: 1.2}}
              className={s.main_section_socials_logo} 
            />
            </div>
          </motion.section>
        </div>
        <motion.section
          className={s.box}
          ref={ref1}
          animate={controls1}
          initial="hidden"
          variants={BoxVariants1}
        />
        <motion.section
          className={s.box}
          ref={ref2}
          animate={controls2}
          initial="hidden"
          variants={BoxVariants2}
        />
        <motion.section
          className={s.box}
          ref={ref3}
          animate={controls3}
          initial="hidden"
          variants={BoxVariants3}
        />
      </main>

      <SocialsSideBar />
    </motion.div>
  );
};
