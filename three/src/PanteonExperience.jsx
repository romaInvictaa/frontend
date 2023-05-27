import { OrbitControls , Text, Float} from '@react-three/drei'
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import Video from './Video'
import {  Panteon } from './Panteon'
import {  Arena } from './Arena'

const PATH = "/textures/coral/"

export default function PanteonExperience() {
    
    return <>
        <OrbitControls makeDefault />
        <spotLight  castShadow position={[10, 15, 30]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <mesh position={[-1.5, 2, 1]} >
         <Video /> 
        
        
        <Panteon position={[0,1,0]}/>
        <Arena />

        
         {/*<Float speed={6}>
        <Text
            fontSize={2}
            fontFamily="Trebuchet MS"
            fontWeight={4}
            color="white"
            position={[0,18,10]}
            
            maxWidth={18}
            
        >
            PANTEON ROMANO
        </Text>
</Float> */}
        </mesh>
    
    
    </>
}