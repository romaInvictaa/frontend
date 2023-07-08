import { Canvas } from '@react-three/fiber';
import Experience from '../../three/src/RuinasExperience';
import { Header, InfoCard, ImageCarousel } from '@/components';

const RuinasPompeya = () => {
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
            <span className='text-5xl md:text-5xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue py-2'>Ruinas de Pompeya</span>
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

export default RuinasPompeya;

const text = ["Sus orígenes no se conocen bien. Se supone que fue una fundación osca, pueblo que ocupó la región de Campania tras la colonización griega del sur de la costa tirrena en los siglos VIII y VII a. C. ",
"En el año 79 a.C. un volcán del tipo estratovolcán llamado Monte Vesubio, el cual se encuentra ubicado cerca a la ciudad italiana de Nápoles entró en erupción",
"En dicha erupción fueron sepultados varios núcleos urbanos, entre ellos las ciudades de Pompeya y parte de Herculano",
"El volcán arrojó enormes cantidades de material piroclástico y los habitantes de la ciudad de Pompeya quedaron sepultados",
"La erupción volcánica que sepultó Pompeya tuvo un efecto sorprendente: actuó como un conservante natural, congelando en el tiempo la vida cotidiana de los habitantes de la ciudad para toda la eternidad",
"Elementos como frescos, mosaicos, joyas, esculturas, elementos de cocina y demás artilugios empleados en el día a día por los habitantes de Pompeya quedaron cubiertos por ceniza y se conservaron"];
const images = ["/ruinas/ruinas1.jpg", "/ruinas/ruinas2.jpg", "/ruinas/ruinas3.jpg", "/ruinas/ruinas4.jpg"];