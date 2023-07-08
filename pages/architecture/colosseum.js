import { Canvas } from "@react-three/fiber";
import Experience from "../../three/src/Experience";
import { Header, InfoCard, ImageCarousel } from "@/components";
import {
  IoMdArrowUp,
  IoMdArrowDown,
  IoMdArrowLeft,
  IoMdArrowRight,
} from "react-icons/io";

const Coliseum = () => {
  const cameraSettings = {
    fov: 80,
    aspect: 2,
    near: 0.1,
    far: 100,
    position: [2, 15, 25],
  };

  return (
    <>
      <Header slug={"/architecture"} />
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1">
          <div className="flex justify-center py-2">
            <span className="text-5xl md:text-5xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue py-2">
              El Gran Coliseo Romano
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
