import { OrbitControls , Text, Float} from '@react-three/drei'
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import Video from './Video'
import {  Coliseo } from './Coliseo'
import {  Land } from './Land'

const PATH = "/textures/coral/"

export default function Experience() {
    
    return <>
        <OrbitControls makeDefault />
        <spotLight  castShadow position={[-15, 15, 0]} intensity={1.5} />
        <ambientLight intensity={0.5} />
    
        {/* <Video /> */}
        <mesh position={[-1.5, 4, 1]} >
            <Coliseo scale={0.1} castShadow/>
        </mesh>

        {/* <Land scale={1}/>
        <Float speed={6}>
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
    
    
    </>
}