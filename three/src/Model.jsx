/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/coliseo.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coliseo.geometry}
        material={materials.Material}
        position={[0, 0, 0]}
        scale={1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.wall}
        position={[0, -50, 0]}
        scale={250}
      />
    </group>
  );
}

useGLTF.preload('/coliseo.glb');
