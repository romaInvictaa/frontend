import { OrbitControls , Text, Float} from '@react-three/drei'
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import Video from './Video'

import { PrimaPorta } from './PrimaPorta';
import { FloorColiseo } from './FloorColiseo';

const PATH = "/textures/coral/"

export default function PrimaPortaExperience() {
    
    return <>
        <OrbitControls makeDefault />
        <spotLight  castShadow position={[10, 15, 30]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <mesh position={[-1.5, 0, 1]} >
        {/* <Video />  */}
        
        <PrimaPorta position={[0, 0, 10]}  scale = {0.1}/>
        <FloorColiseo/>        
        
    
        </mesh>
    
    
    </>
}