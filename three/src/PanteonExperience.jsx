import { OrbitControls , Text, Float} from '@react-three/drei'
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import Video from './Video'
import {  Panteon } from './Panteon'

const PATH = "/textures/coral/"

export default function PanteonExperience() {
    
    return <>
        <OrbitControls 
        makeDefault
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        target={[0, 4, 0]}
        />

        <spotLight  castShadow position={[10, 15, 30]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <mesh position={[0, 0, 0]} >
        {/* <Video />  */}
        
        <Panteon 
        position={[0,0,0]}
        rotation={[0,Math.PI/5,0]}

        />
        {/* <Arena /> */}

        
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