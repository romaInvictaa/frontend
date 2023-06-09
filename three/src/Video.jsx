import { useVideoTexture } from '@react-three/drei';
import { DoubleSide } from 'three';
import { useState } from 'react';

export default function Video() {
  const [pause, setPause] = useState(false);

  const props = {
    unsuspend: 'canplay',
    muted: true,
    loop: true,
    start: pause,
  };

  const videoTexture = useVideoTexture('/video/fondo1.mp4', props);

  const playVideo = () => {
    setPause(true);
  };

  return (
    <mesh receiveShadow onAfterRender ={playVideo} position={[0, 15, 0]}>
      <sphereGeometry args={[50, 16, 20, 0, 6.4, 1, 1.2]} />
      <meshStandardMaterial map={videoTexture} side={DoubleSide} />
    </mesh>
  );
}
