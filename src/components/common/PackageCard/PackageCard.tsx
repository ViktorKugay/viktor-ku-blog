import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Text} from '../../ui/Text/Text';
import React, {useRef} from 'react';
import anime from 'animejs';

import s from './PackageCard.css';

interface Props {
  title: string;
  description: string;
  color: string;
}

export const PackageCard: React.FC<Props> = ({title, description, color}) => {
  const container = useRef() as any;

  const handleOver = () => {
    anime({
      targets: container.current,
      scale: 1.03,
      duration: 3000,
    });
  };

  const handleDown = () => {
    anime({
      targets: container.current,
      scale: 1,
      duration: 3000,
    });
  };

  return (
    <div className={s.root} ref={container} onMouseEnter={handleOver} onMouseLeave={handleDown}>
      <div style={{background: color, flexGrow: 0, width: 24, borderRadius: '5px 0 0 5px'}} />
      <div className={s.content}>
        <Text mod="h3" weight="700" className={s.title}>
          {title}
        </Text>
        <Text mod="p" whiteSpace="preWrap">
          {description}
        </Text>
        <ArrowForwardIcon className={s.arrow} />
      </div>
    </div>
  );
};
