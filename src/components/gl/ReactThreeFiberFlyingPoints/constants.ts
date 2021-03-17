import {CSSProperties} from 'react';
import {isMobile} from '../../../constants';
import {ReactThreeFiberCamera} from '../../../types/types';

export const INITIAL_MOUSE_POSITION = [0, 0];
// количество маленьких точек на странице
export const PARTICLES_COUNT = isMobile ? 5000 : 10000;
// количество летающих точек
export const FLYING_POINTS_COUNT = 20;
// цвета летающих точек
export const FLYING_POINTS_COLORS = [
  '#A2CCB6',
  '#FCEEB5',
  '#EE786E',
  '#e0feff',
  'lightpink',
  'lightblue',
];
// кастомный курсор
export const CURSOR_CUSTOM =
  "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 39 39, auto";
// конфиг сцены
export const PIXEL_RATIO = Math.min(2, isMobile ? window.devicePixelRatio : 1);
export const CAMERA: ReactThreeFiberCamera = {fov: 100, position: [0, 0, 30]};

export const POINTS_LIGHT_DISTANCE = 100;
export const POINTS_LIGHT_INTENCITY = 20;

export const CANVAS_STYLES: CSSProperties = {
  // position: 'absolute',
  height: '100vh',
  width: '100%',
  // top: '0',
  // left: '0',
  // zIndex: 1,
};
