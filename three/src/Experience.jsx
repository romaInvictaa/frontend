import { OrbitControls, Text,  Audio  } from "@react-three/drei";
import Video from "./Video";
import { Coliseo } from "./Coliseo";
import React, { useRef, useState, useEffect } from "react";
import { Html } from '@react-three/drei';
import { useFrame, useLoader } from "react-three-fiber";
import { VideoTexture, DoubleSide, TextureLoader,} from 'three';
import { FloorColiseo } from "./FloorColiseo";
import { useTexture } from '@react-three/drei';

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
    const [texture] = useLoader(TextureLoader, ["/sonido.png"]);
    return (
      <>
        <Html>
            <video ref={videoRef} src="/music/roma.mp3" style={{ display: 'music' }} />
        </Html>
        <mesh position={[-5, 12, 17]}  rotation={[0, Math.PI / 2, 0]}  onClick={playVideo} onDoubleClick={pauseVideo}>
          <boxGeometry args={[0, 1, 1]}   />
          <meshStandardMaterial map={texture} transparent={true} />
        </mesh>
      </>
    );
  };
  

export default function Experience() {
    
  
  return (
    <>
      <OrbitControls
        makeDefault
        enablePan={false}
        maxPolarAngle={Math.PI / 2.1}
        target={[0, 4, 0]}
        maxDistance={30}
      />
      <Html style={{ textAlign: 'right' }}>
        <img
          src="/clickicon.png"
          style={{ marginLeft: '370px', marginTop: '130px' }}
        ></img>
      </Html>
      <spotLight castShadow position={[10, 25, 30]} intensity={1.5} />
      <ambientLight intensity={0.05} />
      <mesh position={[-1.5, 4, 1]}>
        <Video />

        <FloorColiseo />
        <Coliseo
          position={[0, 2, 1]}
          scale={0.002}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        
        <VideoPlayer />
       
      </mesh>
    </>
  );
}
