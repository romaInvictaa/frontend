import { OrbitControls , Text, Float} from '@react-three/drei'
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import Video from './Video'
import {  Coliseo } from './Coliseo'
import {  Land } from './Land'
import { FloorColiseo } from './FloorColiseo'



export default function Experience() {
    
    return <>
        <OrbitControls makeDefault />
        <spotLight  castShadow position={[10, 25, 30]} intensity={1.5} />
        <ambientLight intensity={0.05} />
        <mesh position={[-1.5, 4, 1]} >
         <Video /> 
        
        <FloorColiseo />
        <Coliseo position={[0, 2, 1]} scale={0.002} rotation={[-Math.PI / 2, 0, 0]}/>
       

        
        {/*<Float speed={6}>
        <Text
            fontSize={2}
            fontFamily="Trebuchet MS"
            fontWeight={4}
            color="white"
            position-y={13}
            maxWidth={18}
            
        >
            COLISEO ROMANO
        </Text>
</Float> */}
        </mesh>
    
    
    </>
}