import lerp from 'lerp';
import * as THREE from 'three';
import React, {useRef, useMemo} from 'react';
import * as meshline from 'threejs-meshline';
import {extend, useFrame, useThree} from 'react-three-fiber';

extend(meshline);

const r = () => Math.max(0.2, Math.random());

interface FatlineProps {
  curve: THREE.Vector3[];
  width: number;
  color: string;
  speed: number;
}

const Fatline: React.FC<FatlineProps> = ({curve, width, color, speed}) => {
  const material = useRef<any>(null);

  useFrame(() => {
    if (material.current) {
      material.current.uniforms.dashOffset.value -= speed;
    }
  });

  return (
    <mesh>
      {/* @ts-ignore */}
      <meshLine attach="geometry" vertices={curve} />
      {/* @ts-ignore */}
      <meshLineMaterial
        attach="material"
        ref={material}
        transparent
        depthTest={false}
        lineWidth={width}
        color={color}
        dashArray={0.1}
        dashRatio={0.95}
      />
    </mesh>
  );
};

interface SparksProps {
  mouse: number[];
  count: number;
  colors: string[];
  radius?: number;
}

export const Sparks: React.FC<SparksProps> = ({mouse, count, colors, radius = 10}) => {
  const lines = useMemo(
    () =>
      new Array(count).fill('').map((_, index) => {
        const pos = new THREE.Vector3(Math.sin(0) * radius * r(), Math.cos(0) * radius * r(), 0);

        const points = new Array(30).fill('').map((_, index) => {
          const angle = (index / 20) * Math.PI * 2;

          return pos
            .add(
              new THREE.Vector3(Math.sin(angle) * radius * r(), Math.cos(angle) * radius * r(), 0),
            )
            .clone();
        });

        const curve = new THREE.CatmullRomCurve3(points).getPoints(1000);

        return {
          color: colors[Math.round(colors.length * Math.random())],
          width: Math.max(0.1, (0.2 * index) / 10),
          speed: Math.max(0.001, 0.004 * Math.random()),
          curve,
        };
      }),
    [count],
  );

  const ref = useRef<any>(null);

  const {size, viewport} = useThree();

  const aspect = size.width / viewport.width;

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x = lerp(ref.current.rotation.x, 0 + mouse[1] / aspect / 200, 0.1);
      ref.current.rotation.y = lerp(ref.current.rotation.y, 0 + mouse[0] / aspect / 400, 0.1);
    }
  });

  return (
    <group ref={ref}>
      <group position={[-radius * 2, -radius, -10]} scale={[1, 1.3, 1]}>
        {lines.map((props, index) => (
          <Fatline key={index} {...props} />
        ))}
      </group>
    </group>
  );
};
