import React from 'react';
import { useState, useEffect } from 'react';
import { Header, PageCard, QuestionCard, Loader } from '@/components';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext.jsx';

const QUESTIONS_URL = '/api/questions';

const testarchitecture = () => {

  const auth = useAuth();
  const user = auth.user;
  console.log(user);

  const [numeroPregunta, setNumeroPregunta] = useState(1);
  const [seleccionada, setSeleccionada] = useState(null);
  const [questions, setQuestions] = useState([]);

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleRespuesta = (opcionId) => {
    setSeleccionada(opcionId);
  };

  const setAnswer = (answer) => {
    if (answer){
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  console.log(correctAnswers);
  const handleSubmit = async () => {
    const response = await fetch(`${QUESTIONS_URL}/architecture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correctAnswers: correctAnswers,
        user_email: user.email,
      }),
    });
    const data = await response.json();
    console.log(data);
  };


  // Traer las preguntas de la base de datos
  const getQuestions = async () => {
    const response = await fetch(`${QUESTIONS_URL}/Arquitectura`);
    const answer = await response.json();
    setQuestions(answer);
  };

  // Actualizar las preguntas
  useEffect(() => {
    getQuestions(numeroPregunta);
  }, []);

  if (questions.length === 0)
    return (
      <Loader />
    );

  // console.log(questions);

  return (
    <>
      <Header slug={'/architecture'} />
      <div className="flex items-center justify-center mt-8">
        <div
          className="group shadow-xl rounded-3xl mb-6 bg-cream-primary"
        >
          {questions.map((question, index) => (
            <div key={index}>
              <QuestionCard question={question} setAnswer={setAnswer}/>
            </div>
          ))}
          <div className="flex justify-between items-center mb-8 ml-3 mr-8 ">
            <span
              onClick={() => handleEnvio()}
              className="md:float-left  mt-2 align-middle text-cream-primary ml-4 font-semibold cursor-pointer bg-dark-slate-blue border border-dark-slate-blue rounded-full px-8 py-2 transition duration-300 hover:bg-cream-primary hover:text-dark-slate-blue hover:border-cream-primary"
            >
              Siguiente Pregunta
            </span>
            <span 
              className="md:float-left  mt-2 align-middle text-cream-primary ml-4 font-semibold cursor-pointer bg-dark-slate-blue border border-dark-slate-blue rounded-full px-8 py-2 transition duration-300 hover:bg-cream-primary hover:text-dark-slate-blue hover:border-cream-primary"
              onClick={() => handleSubmit()}
            >
              Enviar
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default testarchitecture;
