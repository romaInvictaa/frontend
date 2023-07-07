import { Canvas } from '@react-three/fiber';
import Experience from '../../three/src/PrimaPortaExperience';
import { Header, InfoCard, ImageCarousel } from '@/components';

const Primaporta = () => {
  const cameraSettings = {
    fov: 80,
    aspect: 2,
    near: 0.1,
    far: 400,
    position: [-2, 20, 30],
  };

  return (
    <>
      <Header slug={"/art"}/>
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1">
          <div className="flex justify-center py-2">
            <span className='text-5xl md:text-5xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue py-2'>Augusto Prima Porta</span>
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-6 md:col-span-4 border-8 border-dark-slate-blue rounded-3xl bg-blue-200 mb-8">
            <Canvas camera={cameraSettings} shadows={true} className='rounded-2xl'>
              <Experience />
            </Canvas>
          </div>   
          <div className="col-span-6 md:col-span-2 sm:px-6">
            <InfoCard texts={text}/>
            <ImageCarousel images={images} />
          </div>
      </div>
      </div>
    </>
  );
};

export default Primaporta;

const text = ["La estatua es una imagen idealizada de Augusto que se basa en el Doríforo de Policleto del siglo V a. C. Acoge la forma de contrapposto de esa escultura, creando diagonales entre los miembros tensos y los relajados, es un rasgo típico de la escultura clásica",
"La estatua data del año 15 d.C, tiene una altura de 2,04 m y fue realizada principalmente en mármol con restos de policromía",
"Augusto aparece en pie, con indumentaria militar, sosteniendo un bastón de mando consular y levantando la mano derecha en señal de paz. En su pecho se aprecia una rica coraza que simboliza sus triunfos militares"
];
const images = ["/primaporta/primaporta1.jpg", "/primaporta/primaporta2.jpg", "/primaporta/primaporta3.jpeg", "/primaporta/primaporta4.png"];
