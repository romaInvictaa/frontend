
import { useVideoTexture } from '@react-three/drei';
import { DoubleSide } from "three"
import { useState } from "react";

export default function Ruinas() {

    const [pause, setPause] = useState(false);

    const props = {
        unsuspend: 'canplay',
        muted: true,
        loop: true,
        start: pause,
    };

    const videoTexture = useVideoTexture('/video/ruinas.mp4', props)
    const playVideo = () => {
        setPause(true);
      };

    return (
        <mesh receiveShadow onAfterRender ={playVideo} position={[0, 0, 0]}>
            <planeGeometry args={[35, 18]} />
            
            <meshStandardMaterial map={videoTexture} side={DoubleSide} />
        </mesh>

        
    )
}