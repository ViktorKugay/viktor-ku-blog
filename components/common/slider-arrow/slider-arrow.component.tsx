import cn from 'classnames';
import React, {MutableRefObject} from 'react';
import {ArrowBack, ArrowForward} from '@material-ui/icons';

interface Props {
  slider: MutableRefObject<any>;
  mod: 'prev' | 'next';
  className?: string;
}

export const SliderArrow: React.FC<Props> = ({mod, className, slider}) => {
  const classNames = cn(className);

  const handleNext = () => {
    slider.current.slickNext();
  };

  const handlePrev = () => {
    slider.current.slickPrev();
  };

  switch (mod) {
    case 'prev': {
      return <ArrowBack className={classNames} onClick={handlePrev} />;
    }

    case 'next': {
      return <ArrowForward className={classNames} onClick={handleNext} />;
    }

    default:
      return null;
  }
};
