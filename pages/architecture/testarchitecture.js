import React from "react";
import { useState } from "react";
import { Header, PageCard } from "@/components";
import Link from "next/link";

const testarchitecture = () => {
  const [respuestas, setRespuestas] = useState([]);

  const opciones = [
    { id: 1, texto: "a) Entrenamiento militar" },
    { id: 2, texto: "b) Natación" },
    { id: 3, texto: "c) Debates políticos" },
    { id: 4, texto: "d) Entretenimiento " },
  ];

  const handleRespuesta = (opcionId) => {
    if (respuestas.includes(opcionId)) {
      // Si la opción ya está seleccionada, la eliminamos de las respuestas
      setRespuestas(respuestas.filter((id) => id !== opcionId));
    } else {
      // Si la opción no está seleccionada, la agregamos a las respuestas
      setRespuestas([...respuestas, opcionId]);
    }
  };
  return (
    <>
      <Header slug={"/architecture"} />
      <div className="flex items-center justify-center mt-8">
        <div
          className="group shadow-xl rounded-3xl mb-6 bg-cream-primary transition duration-500 hover:scale-105 cursor-pointer 
          bg-gradient-to-r from-transparent via-light-gray to-transparent 
          relative hover:before:absolute hover:before:inset-0 hover:before:-translate-x-full hover:before:animate-[shimmer_1s] hover:before:bg-gradient-to-r hover:before:from-transparent hover:before:via-light-gray/25 hover:before:to-transparent 
          isolate overflow-hidden shadow-xl shadow-black/5 before:border-t before:border-light-gray/25"
        >
          <div className="container mx-auto">
            <h1 className="text-3xl mx-8 mt-8 font-semibold text-dark-slate-blue flex justify-center xl:text-xl xl:mb-2">
              Cual era el propósito principal del Coliseo Romano?
            </h1>
            <div className='col-span-2 ml-12'>
                        <img
                            className='rounded-xl'
                            src={ "/carrusel/colosseum.png"}
                            width={500}
                        />
                    </div>
            <div className="flex flex-col mx-8 mb-6 mt-2">
              {opciones.map((opcion) => (
                <label
                  key={opcion.id}
                  className="group shadow-xl rounded-3xl mb-2 py-4 px-2 bg-white transition duration-500 hover:scale-105 cursor-pointer 
                            bg-gradient-to-r from-transparent via-light-gray to-transparent 
                            relative hover:before:absolute hover:before:inset-0 hover:before:-translate-x-full hover:before:animate-[shimmer_1s] hover:before:bg-gradient-to-r hover:before:from-transparent hover:before:via-light-gray/25 hover:before:to-transparent 
                            isolate overflow-hidden shadow-xl shadow-black/5 before:border-t before:border-light-gray/25" >
                  <input
                    type="checkbox"
                    className="form-checkbox h-3 w-5 text-blue-500"
                    checked={respuestas.includes(opcion.id)}
                    onChange={() => handleRespuesta(opcion.id)}
                  />
                  <span className="ml-2 text-lg">{opcion.texto}</span>
                </label>
              ))}
            </div>

            <div className="flex justify-between items-center mb-8 ml-3 mr-8 ">
              <Link href="/">
                <span className="md:float-left  mt-2 align-middle text-cream-primary ml-4 font-semibold cursor-pointer bg-dark-slate-blue border border-dark-slate-blue rounded-full px-8 py-2 transition duration-300 hover:bg-cream-primary hover:text-dark-slate-blue hover:border-cream-primary">
                  Siguiente Pregunta
                </span>
              </Link>
              <Link href="/">
                <span className="md:float-left  mt-2 align-middle text-cream-primary ml-4 font-semibold cursor-pointer bg-dark-slate-blue border border-dark-slate-blue rounded-full px-8 py-2 transition duration-300 hover:bg-cream-primary hover:text-dark-slate-blue hover:border-cream-primary">
                  Enviar
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default testarchitecture;
