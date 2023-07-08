import { Canvas } from '@react-three/fiber';
import PanteonExperience from '../../three/src/PanteonExperience';
import { Header, InfoCard, ImageCarousel } from '@/components';

const Pantheon = () => {
  const cameraSettings = {
    fov: 90,
    aspect: 2,
    near: 0.1,
    far: 400,
    position: [-2, 18, 30],
  };

  return (
    <>
      <Header slug={"/architecture"}/>
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1">
          <div className="flex justify-center py-2">
            <span className='text-4xl md:text-5xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue py-2'>El Gran Panteon Romano</span>
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-6 md:col-span-4 border-8 border-dark-slate-blue rounded-3xl bg-blue-200 mb-8">
            <Canvas camera={cameraSettings} shadows={true} className='rounded-2xl'>
              <PanteonExperience />
            </Canvas>
          </div>   
          <div className="col-span-6 md:col-span-2 sm:px-6">
            <InfoCard text={text}/>
            <ImageCarousel images={images}/>
          </div>
      </div>
      </div>
    </>
  );
};

export default Pantheon;

const text = "Un antiguo templo romano. Fue terminado por orden del emperador Adriano y dedicado alrededor del año 126. Su fecha de construcción es incierta porque Adriano optó por no inscribir el nuevo templo, sino que conservó la inscripción del templo más antiguo que se había quemado."
const images = ["/pantheon/pantheon1.png", "/pantheon/pantheon2.png", "/pantheon/pantheon3.png", "/pantheon/pantheon4.png", "/pantheon/pantheon5.png"];