import React, {useState, useCallback, useEffect, useRef} from 'react';
import {Particles} from './components/Particles';
import {Effects} from './components/Effects';
import {Sparks} from './components/Sparks';
import {Canvas} from 'react-three-fiber';

import {
  CAMERA,
  CURSOR_CUSTOM,
  FLYING_POINTS_COLORS,
  FLYING_POINTS_COUNT,
  INITIAL_MOUSE_POSITION,
  PARTICLES_COUNT,
  PIXEL_RATIO,
  POINTS_LIGHT_DISTANCE,
  POINTS_LIGHT_INTENCITY,
  CANVAS_STYLES,
} from './constants';

const ReactThreeFiberFlyingPoints: React.FC = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const mouseCoords = useRef(INITIAL_MOUSE_POSITION);

  const handleMouseMove = useCallback(({clientX, clientY}: {clientX: number; clientY: number}) => {
    mouseCoords.current = [clientX - window.innerWidth / 2, clientY - window.innerHeight / 2];
  }, []);

  useEffect(() => {
    document.body.style.cursor = CURSOR_CUSTOM;
  }, []);

  return (
    <Canvas
      style={CANVAS_STYLES}
      camera={CAMERA}
      pixelRatio={PIXEL_RATIO}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsMouseDown(false)}
      onMouseDown={() => setIsMouseDown(true)}
    >
      <pointLight
        color="white"
        distance={POINTS_LIGHT_DISTANCE}
        intensity={POINTS_LIGHT_INTENCITY}
      />
      {/* prettier-ignore */}
      <Particles 
        count={PARTICLES_COUNT} 
        mouse={mouseCoords} 
      />
      <Sparks mouse={mouseCoords} count={FLYING_POINTS_COUNT} colors={FLYING_POINTS_COLORS} />
      <Effects isActive={isMouseDown} />
    </Canvas>
  );
};

export default ReactThreeFiberFlyingPoints;
