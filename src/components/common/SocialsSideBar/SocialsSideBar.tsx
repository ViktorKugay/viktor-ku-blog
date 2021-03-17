import React, {useEffect, useRef} from 'react';
import {motion, useAnimation, useViewportScroll} from 'framer-motion';

import s from './SocialsSideBar.module.scss';

const BoxVariants = {
  visible: {opacity: 1, x: 0, transition: {duration: 1}},
  hidden: {
    opacity: 0,
    x: 300,
    transition: {duration: 1},
  },
};

export const SocialsSideBar: React.FC = () => {
  const prevScrollY = useRef(0);

  const {scrollYProgress} = useViewportScroll();

  const controls = useAnimation();

  useEffect(() => {
    scrollYProgress.onChange((scrollY) => {
      if (scrollY.toFixed(1) === '0.1') {
        prevScrollY.current < scrollY ? controls.start('visible') : controls.start('hidden');
      }

      prevScrollY.current = scrollY;
    });
  }, []);

  return (
    <motion.section
      className={s.section_side_socials}
      animate={controls}
      initial="hidden"
      variants={BoxVariants}
    >
      <div className={s.section_side_socials_container}>
        <motion.img
          whileHover={{scale: 1.2}}
          src="/socials/linkedin.svg"
          className={s.section_side_socials_logo}
        />
        <motion.img
          whileHover={{
            translateX: '15%',
          }}
          style={{translateX: '25%'}}
          src="/socials/github.svg"
          className={s.section_side_socials_logo_github}
        />
        <motion.img
          whileHover={{scale: 1.2}}
          src="/socials/twitter.svg"
          className={s.section_side_socials_logo}
        />
      </div>
    </motion.section>
  );
};
