import { useTexture } from "@react-three/drei"
import { DoubleSide } from "three"
import { useState } from "react";

export default function Mosaico() {

    const PATH = "/"
    const imagenes = ["mosaicoissos.jpg"];
    var idImage = 0;
    const [textureUrl, setTextureUrl] = useState(imagenes[idImage]);



    const props = useTexture({
        map: PATH + textureUrl

    })

    return (
        <mesh receiveShadow  rotation-z={- Math.PI * 2}>
            <planeGeometry args={[35, 18]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}