import { useTexture } from "@react-three/drei"
import { DoubleSide } from "three"

export  function FloorColiseo() {
    const PATH = "/textures/arena/"

    const props = useTexture ({
        map: PATH + "color.jpg",
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg'
    })
    return (
        <mesh receiveShadow rotation-x={- Math.PI * 0.5}>
            <planeGeometry args={[60, 60]} />
            <meshStandardMaterial {...props} side={DoubleSide}/>
        </mesh>
    )
}