import { Canvas } from '@react-three/fiber';
import Experience from '../../three/src/RomuloExperience';
import { Header, InfoCard, ImageCarousel } from '@/components';

const Romulo = () => {
  const cameraSettings = {
    fov: 90,
    aspect: 2,
    near: 0.1,
    far: 60,
    position: [0, 10, 25],
  };
  


  return (
    <>
      <Header slug={"/history"}/>
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1">
          <div className="flex justify-center py-2">
            <span className='text-5xl md:text-5xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue py-2'>Romulo y Remo</span>
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-6 md:col-span-4 border-8 border-dark-slate-blue rounded-3xl bg-blue-200 mb-8">
            <Canvas camera={cameraSettings} shadows={true} className='rounded-2xl'>
              <Experience />
            </Canvas>
          </div>   
          <div className="col-span-6 md:col-span-2 sm:px-6">
            <InfoCard text={text}/>
            <ImageCarousel images={images} />
          </div>
      </div>
      </div>
    </>
  );
};

export default Romulo;

const text = "Cuenta la leyenda antiquísima de los helenos que Eneas, príncipe de Dardania, escapó de la destrucción de Troya cargando a su padre, Anquises, sobre sus hombros y a su hijo Ascanio, aunque perdió en la fuga a su esposa, Creúsa, hija del rey Príamo. "
const images = ["/romulo/romulo1.jpg", "/romulo/romulo2.jpg", "/romulo/romulo3.jpg",  "/romulo/romulo4.jpg"];