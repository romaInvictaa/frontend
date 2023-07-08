import { Canvas } from '@react-three/fiber';
import PanteonExperience from '../../three/src/PanteonExperience';
import { Header, InfoCard, ImageCarousel } from '@/components';
import { useState } from 'react';

const Pantheon = () => {
  const cameraSettings = {
    fov: 75,
    // aspect: 2,
    // near: 0.1,
    // far: 400,
    position: [0, 5, 15],

  };
 
  const [showInfo, setShowInfo] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const toggleShowHelp = () => {
    setShowHelp(!showHelp);
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const infoUrl = 'https://es.wikipedia.org/wiki/Pante%C3%B3n_de_Agripa';


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
            <div className="col-span-6">
              <div className='md:mt-3 md:ml-4 absolute z-30' onClick={toggleShowHelp}>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 96 96" fill="#181E4B">
                  <path d="m48,9c-21.54,0-39,17.46-39,39s17.46,39 39,39 39-17.46 39-39-17.46-39-39-39zm6.117,53.349c-2.943,4.419-5.937,7.824-10.974,7.824-3.438-.561-4.851-3.024-4.107-5.535l6.48-21.462c.159-.525-.105-1.086-.585-1.257-.477-.168-1.413,.453-2.223,1.341l-3.918,4.713c-.105-.792-.012-2.1-.012-2.628 2.943-4.419 7.779-7.905 11.058-7.905 3.117,.318 4.593,2.811 4.05,5.55l-6.525,21.567c-.087,.486 .171,.981 .612,1.137 .48,.168 1.488-.453 2.301-1.341l3.915-4.71c.105,.792-.072,2.178-.072,2.706zm-.873-28.032c-2.478,0-4.488-1.806-4.488-4.464s2.01-4.461 4.488-4.461 4.488,1.806 4.488,4.461c0,2.661-2.01,4.464-4.488,4.464z" />
                </svg>
                {showHelp && (
                  <div className="flex bg-cream-primary px-4 py-2 rounded-xl text-dark-slate-blue font-semibold text-md ml-4 w-80 md:w-96">
                  <img 
                  src="/clickicon.png" 
                  className="hidden md:block" 
                  alt="click"
                  width={100}
                  height={80}
                  />
                  <div className="ml-4 hidden md:contents">
                    Puedes interactuar con el modelo 3D haciendo click sobre él y moviendolo con el mouse
                  </div>
                  <div className="md:hidden">
                    Puedes interactuar con el modelo 3D mediante la pantalla de tu dispositivo
                  </div>
                </div>
                )}
              </div>
            </div>
            <div className="h-full">
            <Canvas camera={cameraSettings} shadows={true} className='rounded-2xl'>
              <PanteonExperience />
            </Canvas>
          </div>  
          </div> 
          <div className="col-span-6 md:col-span-2 sm:px-6">
            <InfoCard texts={text}/>
            <ImageCarousel images={images}/>
            <div className="flex justify-center mb-8">
              {showInfo && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                  <div className="bg-white rounded-lg w-full h-full my-36 mb-12 p-2 mx-2 md:p-4  md:w-2/3 md:h-5/6 md:my-24">
                    <button
                      className="absolute top-2 right-2 text-3xl text-gray-500 hover:text-gray-700"
                      onClick={toggleInfo}
                    >
                      X
                    </button>
                    <iframe className="w-full h-full" src={infoUrl}></iframe>
                  </div>
                </div>
              )}
              <button
                className="bg-dark-slate-blue hover:bg-blue-700 text-cream-primary text-xl  font-bold py-2 px-6 rounded-full"
                onClick={toggleInfo}
              >
                Más información
              </button>
            </div>
          </div>
      </div>
      </div>
    </>
  );
};

export default Pantheon;

const text = ["Un antiguo templo romano. Fue terminado por orden del emperador Adriano y dedicado alrededor del año 126. Su fecha de construcción es incierta porque Adriano optó por no inscribir el nuevo templo, sino que conservó la inscripción del templo más antiguo que se había quemado",,
"El panteón romano cuyo nombre procede del griego Pántheion (en griego: Πάνθειον), que significa «templo de todos los dioses». Se construyó con la finalidad de adorar y hacer culto a todos los dioses romanos",
"Su construcción se inició en el siglo I d.C por órdenes del emperador Marco y la principal característica arquitectónica del Panteón es una gran cúpula de hormigón con óculo central la cual tiene un diámetro de 30 metros"
];
const images = ["/pantheon/pantheon1.png", "/pantheon/pantheon2.png", "/pantheon/pantheon3.png", "/pantheon/pantheon4.png", "/pantheon/pantheon5.png"];