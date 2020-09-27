import React, {useRef} from 'react';
import Slider, {Settings} from 'react-slick';
import {SliderArrow} from './slider-arrow/slider-arrow.component';

import s from './slider.module.scss';

const sliderDefaultConfig: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  initialSlide: 0,
  adaptiveHeight: false,
};

interface Props {
  sliderConfig?: object;
}

export const SliderContainer: React.FC<Props> = ({
  children,
  sliderConfig = sliderDefaultConfig,
}) => {
  const slider = useRef<Slider>(null);

  return (
    <>
      <SliderArrow className={s.prev_arrow} slider={slider} mod="prev" />
      <div className={s.slider_container}>
        <Slider ref={slider} {...sliderConfig}>
          {children}
        </Slider>
      </div>
      <SliderArrow className={s.next_arrow} slider={slider} mod="next" />
    </>
  );
};
