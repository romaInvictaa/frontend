import { Canvas } from '@react-three/fiber';
import Experience from '../../three/src/MosaicoExperience';
import { Header, InfoCard, ImageCarousel } from '@/components';

const Mosaico = () => {
  const cameraSettings = {
    fov: 90,
    aspect: 2,
    near: 0.1,
    far: 400,
    position: [0, 0, 8],
  };

  return (
    <>
      <Header slug={"/history"}/>
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1">
          <div className="flex justify-center py-2">
            <span className='text-5xl md:text-5xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue py-2'>Mosaico de issos</span>
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
            <ImageCarousel />
          </div>
      </div>
      </div>
    </>
  );
};

export default Mosaico;

const text = "El mosaico representa la batalla de Issos, en especial la carga de los hetairoi de Alejandro guiados por su líder mientras los soldados de Darío III Codomano intentan proteger a su rey. El mosaico tiene unas dimensiones de 2.72 por 5.13 metros."
