import { OrbitControls, Text, Float } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import { DoubleSide } from 'three';
import Video from './Video';
import { Html } from '@react-three/drei';
import Mosaico from './Mosaico';

const PATH = '/textures/coral/';

export default function MosaicoExperience() {
  return (
    <>
      <OrbitControls
        makeDefault
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
        maxDistance={10}
      />
      <Html style={{ textAlign: 'right' }}>
        <img
          src="/clickicon.png"
          style={{ marginLeft: '300px', marginTop: '85px' }}
        ></img>
      </Html>
      <spotLight castShadow position={[10, 15, 30]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh>
        {/* <Video />  */}

        <Mosaico scale={10} />
      </mesh>
    </>
  );
}
