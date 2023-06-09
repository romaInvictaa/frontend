import React from 'react';
import { useState, useEffect } from 'react';
import { Header, PageCard } from '@/components';
import Link from 'next/link';

const QUESTIONS_URL = '/api/questions';

const testarchitecture = () => {
  const [numeroPregunta, setNumeroPregunta] = useState(1);
  const [seleccionada, setSeleccionada] = useState(null);
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [actualizarInfo, setActualizarInfo] = useState(true);
  const [answer, setAnswer] = useState('');
  const opciones = [
    { id: 1, texto: option1 },
    { id: 2, texto: option2 },
    { id: 3, texto: option3 },
    { id: 4, texto: option4 },
  ];

  const handleRespuesta = (opcionId) => {
    setSeleccionada(opcionId);
  };
  const handleEnvio = () => {
    setNumeroPregunta(numeroPregunta + 1);
    console.log(answer);
    if (opciones[seleccionada - 1].texto == answer) {
      alert('Todo bien manito');
    } else {
      alert('Se equivocó perro hpta');
    }
    setActualizarInfo(true);
    setSeleccionada(null);
  };
  const getQuestion = async (id) => {
    const response = await fetch(`${QUESTIONS_URL}/${id}`);
    const ans = await response.json();
    setQuestion(ans[0].question);
    setOption1(ans[0].option1);
    setOption2(ans[0].option2);
    setOption3(ans[0].option3);
    setOption4(ans[0].option4);
    setAnswer(ans[0].answer);
  };
  useEffect(() => {
    getQuestion(numeroPregunta);
    setActualizarInfo(false);
  }, [actualizarInfo]);

  return (
    <>
      <Header slug={'/architecture'} />
      <div className="flex items-center justify-center mt-8">
        <div
          className="group shadow-xl rounded-3xl mb-6 bg-cream-primary transition duration-500 hover:scale-105 cursor-pointer 
          bg-gradient-to-r from-transparent via-light-gray to-transparent 
          relative hover:before:absolute hover:before:inset-0 hover:before:-translate-x-full hover:before:animate-[shimmer_1s] hover:before:bg-gradient-to-r hover:before:from-transparent hover:before:via-light-gray/25 hover:before:to-transparent 
          isolate overflow-hidden shadow-xl shadow-black/5 before:border-t before:border-light-gray/25"
        >
          <div className="container mx-auto">
            <h1 className="text-3xl mx-8 mt-8 font-semibold text-dark-slate-blue flex justify-center xl:text-xl xl:mb-2">
              {question}
            </h1>
            <div className="col-span-2 ml-12">
              <img
                className="rounded-xl"
                src={'/carrusel/colosseum.png'}
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
                           isolate overflow-hidden shadow-xl shadow-black/5 before:border-t before:border-light-gray/25"
                >
                  <input
                    type="radio" // Cambiar el tipo de checkbox a radio
                    className="form-radio h-3 w-5 text-blue-500"
                    checked={opcion.id === seleccionada} // Comprobar si la opción es igual a la opción seleccionada
                    onChange={() => handleRespuesta(opcion.id)}
                  />
                  <span className="ml-2 text-lg">{opcion.texto}</span>
                </label>
              ))}
            </div>

            <div className="flex justify-between items-center mb-8 ml-3 mr-8 ">
              <span
                onClick={() => handleEnvio()}
                className="md:float-left  mt-2 align-middle text-cream-primary ml-4 font-semibold cursor-pointer bg-dark-slate-blue border border-dark-slate-blue rounded-full px-8 py-2 transition duration-300 hover:bg-cream-primary hover:text-dark-slate-blue hover:border-cream-primary"
              >
                Siguiente Pregunta
              </span>
              <span className="md:float-left  mt-2 align-middle text-cream-primary ml-4 font-semibold cursor-pointer bg-dark-slate-blue border border-dark-slate-blue rounded-full px-8 py-2 transition duration-300 hover:bg-cream-primary hover:text-dark-slate-blue hover:border-cream-primary">
                Enviar
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default testarchitecture;
