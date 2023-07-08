import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Experience from "../../three/src/Experience";
import { Header, InfoCard, ImageCarousel } from "@/components";

const Coliseum = () => {
  const cameraSettings = {
    fov: 80,
    aspect: 2,
    near: 0.1,
    far: 100,
    position: [2, 15, 25],
  };

  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const infoUrl = "https://es.wikipedia.org/wiki/Coliseo_Romano";

  return (
    <>
      <Header slug={"/architecture"} />
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1">
          <div className="flex justify-center py-2">
            <span className='text-4xl md:text-5xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue py-2'>El Gran Coliseo Romano</span>
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="col-span-6 md:col-span-4 border-8 border-dark-slate-blue rounded-3xl bg-blue-200 mb-8">
            <Canvas
              camera={cameraSettings}
              shadows={true}
              className="rounded-2xl"
            >
             
            

            <Experience />
   
   
            </Canvas>
          </div>
          <div className="col-span-6 md:col-span-2 sm:px-6">
            <InfoCard texts={text} />
            <ImageCarousel images={images} />
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

export default Coliseum;

const text = [
  "El Coliseo es testigo de batallas épicas donde la gloria y el honor se disputaban bajo el rugido de los leones, las espadas chocaban y los corazones latían al unísono. ¡Ven y descubre los secretos de este coloso de la historia!",
  "En el Coliseo tenían lugar luchas de gladiadores y espectáculos públicos. Se construyó justo al este del Foro Romano, y las obras empezaron entre 70 d. C. y 72 d. C. Esto con la finalidad de entretener a las diferentes clases sociales del pueblo romano",
];
const images = [
  "/colosseum/colosseum1.png",
  "/colosseum/colosseum2.png",
  "/colosseum/colosseum3.png",
  "/colosseum/colosseum4.png",
];
