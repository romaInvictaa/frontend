import React, { useRef, useState, useEffect } from "react";
import { useVideoTexture, OrbitControls, useThree } from "@react-three/drei";
import { Html } from '@react-three/drei';
import { useFrame, useLoader } from "react-three-fiber";
import { VideoTexture, DoubleSide ,  TextureLoader} from 'three';
import { Romulo } from './Romulo';
import { FloorColiseo } from './FloorColiseo';


const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [videoTexture, setVideoTexture] = useState(null);
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setPlaying(false);
  };

  const rewindVideo = () => {
    videoRef.current.currentTime = 0;
  };

  const stopVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setPlaying(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "KeyP") {
        playVideo();
      } else if (event.code === "Space") {
        pauseVideo();
      } else if (event.code === "KeyR") {
        rewindVideo();
      } else if (event.code === "KeyS") {
        stopVideo();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const texture = new VideoTexture(videoRef.current);
      setVideoTexture(texture);
    }
  }, []);

  useFrame(() => {
    if (playing && videoRef.current && videoTexture) {
      videoTexture.needsUpdate = true;
    }
  });

  const videoTexture1 = useVideoTexture('/video/romulo.mp4');
  
    

  return (
    <>
      <Html>
        <video ref={videoRef} src="/video/romulo.mp4" style={{ display: 'none' }} />
      </Html>
      <mesh position={[0, 1, -5]}   onClick={playVideo} onDoubleClick={pauseVideo}>
        <boxGeometry args={[60, 30, 0.1]}   />
        <meshStandardMaterial map={videoTexture1} side={DoubleSide}  />
        
      </mesh>

    </>
  );
};

export default function RomuloExperience() {
  const notaRef = useRef();
  const [showNota, setShowNota] = useState(false);
  const [texture] = useLoader(TextureLoader, ["/sonido.png"]);
 

  const handleClick = () => {
    setShowNota(true);
  };

  const handleClick1 = () => {
    setShowNota(false);
  };

  return (
    <>
      <OrbitControls 
        makeDefault
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        target={[0, 4, 0]}
        maxDistance={35}
      />

      <spotLight castShadow position={[10, 15, 30]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position={[-1.5, 0, 1]} onBeforeRender ={handleClick} >

      <mesh position={[25, 9, -14]}  rotation={[0, Math.PI / 2, 0]}  >
        <boxGeometry args={[0, 4, 4]}   />
        <meshStandardMaterial map={texture} transparent={true} />
      </mesh>
        <Romulo  position={[0, 2.1, 10]} scale={0.3} rotation={[-Math.PI / 7, -Math.PI / 10, 0]} />
        <FloorColiseo />
        {showNota && (
          <mesh ref={notaRef} position={[0, 20, -10]} >
            <VideoPlayer />
          </mesh>
        )}
      </mesh>

      
    </>
  );
}
