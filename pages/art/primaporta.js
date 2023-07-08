import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Experience from "../../three/src/PrimaPortaExperience";
import { Header, InfoCard, ImageCarousel } from "@/components";

const Primaporta = () => {

  console.log(text)
  const cameraSettings = {
    fov: 80,
    aspect: 2,
    near: 0.1,
    far: 400,
    position: [-2, 20, 30],
  };
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const infoUrl = "https://es.wikipedia.org/wiki/Augusto";

  return (
    <>
      <Header slug={"/art"} />
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1">
          <div className="flex justify-center py-2">
            <span className="text-5xl md:text-5xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue py-2">
              Augusto Prima Porta
            </span>
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
                className="bg-dark-slate-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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

export default Primaporta;

const text = ["La estatua es una imagen idealizada de Augusto que se basa en el Doríforo de Policleto del siglo V a. C. Acoge la forma de contrapposto de esa escultura, creando diagonales entre los miembros tensos y los relajados, es un rasgo típico de la escultura clásica",
"La estatua data del año 15 d.C, tiene una altura de 2,04 m y fue realizada principalmente en mármol con restos de policromía",
"Augusto aparece en pie, con indumentaria militar, sosteniendo un bastón de mando consular y levantando la mano derecha en señal de paz. En su pecho se aprecia una rica coraza que simboliza sus triunfos militares"
];
const images = ["/primaporta/primaporta1.jpg", "/primaporta/primaporta2.jpg", "/primaporta/primaporta3.jpeg", "/primaporta/primaporta4.png"];
