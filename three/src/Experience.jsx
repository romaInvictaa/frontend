import { OrbitControls , Text, Float} from '@react-three/drei'
import Video from './Video'
import {  Model } from './Model'
import {  Land } from './Land'



export default function Experience() {
    return <>
        <OrbitControls makeDefault />
        <spotLight  castShadow position={[0, 50, 0]} intensity={1.5} />
        <ambientLight intensity={0.5} />
    
        <Video /> 
        <Model position={[0, 7, -19]} scale={0.06} castShadow/>
        <Land scale={1}/>
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
        </Float>
    
    
    </>
}