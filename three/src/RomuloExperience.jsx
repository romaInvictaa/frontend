import { OrbitControls , Text, Float} from '@react-three/drei'
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import Video from './Video'

import { Romulo } from './Romulo';
import { FloorColiseo } from './FloorColiseo';

const PATH = "/textures/coral/"

export default function RomuloExperience() {
    
    return <>
        <OrbitControls makeDefault />
        <spotLight  castShadow position={[10, 15, 30]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <mesh position={[-1.5, 0, 1]} >
        {/* <Video />  */}
        
        <Romulo position={[0, 2.1, 10]}  scale = {0.3} rotation={[-Math.PI / 7, -Math.PI / 10, 0]}/>
        <FloorColiseo/>        
        
    
        </mesh>
    
    
    </>
}