import React, { useCallback, useRef } from 'react';
import { Center, Instance, Instances } from '@react-three/drei';
import gsap from 'gsap';
import * as THREE from 'three';
import { useGSAP } from '@gsap/react';
import { CustomeMaterial } from './material';

export const Item4 = ({ count = 10, scale = 0.3, delay = 0.25, duration = 1 }) => {
  const refList = useRef([]);

  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  useGSAP(() => {
    if (refList.current.length === 0) return;

    refList.current.forEach((mesh, index) => {
      if (mesh) {
        gsap.to(mesh.scale, {
          x: scale,
          z: scale,
          delay: delay * index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration: duration,
        });
      }
    });
  }, [scale, delay, duration]);

  return (
    <Center>
      <group rotation={[0, 0, Math.PI / 4]}>
        <group rotation={[0, 0, Math.PI / 2]}>
          <Instances>
            <cylinderGeometry args={[1, 1, 0.2, 64]} />
            <CustomeMaterial />
            {Array.from({ length: count }).map((_, index) => (
              <Instance
                ref={getRef}
                key={index}
                position={[0, 0.5 * index, 2]}
              />
            ))}
          </Instances>
        </group>
      </group>
    </Center>
  );
};
