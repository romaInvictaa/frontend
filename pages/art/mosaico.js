import { Canvas } from "@react-three/fiber";
import Experience from "../../three/src/MosaicoExperience";
import {useState } from "react";
import { Header, InfoCard, ImageCarousel } from "@/components";
import { info } from "autoprefixer";

const Mosaico = () => {
  const cameraSettings = {
    fov: 90,
    aspect: 2,
    near: 0.1,
    far: 400,
    position: [0, 0, 8],
  };

  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const infoUrl = "https://es.wikipedia.org/wiki/Batalla_de_Issos";

  return (
    <>
      <Header slug={"/art"} />
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1">
          <div className="flex justify-center py-2">
            <span className="text-5xl md:text-5xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue py-2">
              Mosaico de issos
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

export default Mosaico;

const text = [
  "El mosaico representa la batalla de Issos, en especial la carga de los hetairoi de Alejandro guiados por su líder mientras los soldados de Darío III Codomano intentan proteger a su rey. El mosaico tiene unas dimensiones de 2.72 por 5.13 metros.",
  "El mosaico de Issos fue encontrado en la ciudad de Tesalónica en Grecia",
  "El mosaico de Issos es una copia que se realizó durante el imperio romano de una pintura helenística. Esta obra fue realizada por el pintor Filoxeno de Eretria",
  "El mosaico está hecho de aproximadamente un millón y medio de diminutas teselas las cuales son pequeñas piezas de cerámica que se utilizan para confeccionar un mosaico",
];
const images = [
  "/mosaico/mosaico1.jpg",
  "/mosaico/mosaico5.jpg",
  "/mosaico/mosaico6.jpg",
  "/mosaico/mosaico4.jpg",
];
