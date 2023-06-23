import { OrbitControls , Text, Float} from '@react-three/drei'
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

import Ruinas from './Ruinas';

const PATH = "/textures/coral/"

export default function RuinasExperience() {
    
    return <>
        <OrbitControls makeDefault />
        <spotLight  castShadow position={[10, 15, 30]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <mesh >
        {/* <Video />  */}
        
        
        <Ruinas scale={10} />

        </mesh>
    
    
    </>
}