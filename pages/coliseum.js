import { Canvas } from '@react-three/fiber';
import Experience from '../three/src/Experience';

const Coliseum = () => {
  const cameraSettings = {
    fov: 90,
    near: 0.1,
    far: 400,
    position: [2, 12, 17],
  };

  return (
    <div className="container">
      <style jsx>{`
        .container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/public/static/textures/sphere/image/nubes.jpeg');
        }
      `}</style>
      <Canvas camera={cameraSettings} shadows={true}>
        <Experience />
      </Canvas>
    </div>
  );
};

export default Coliseum;
