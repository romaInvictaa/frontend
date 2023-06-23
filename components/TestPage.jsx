import React from 'react';
import { useState, useEffect } from 'react';
import { Header, QuestionCard, Loader } from '@/components';
import { useAuth } from '@/context/AuthContext.jsx';

const QUESTIONS_URL = '/api/questions';

const TestPage = () => {

  const auth = useAuth();
  const user = auth.user;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleRespuesta = (opcionId) => {
    setSeleccionada(opcionId);
  };

  const setAnswer = (answer) => {
    if (answer) {
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
    getQuestions();
  }, []);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };


  if (questions.length === 0)
    return (
      <Loader />
    );

  // console.log(questions);

  const customLeftArrow = (
    <div className="grid grid-cols-3  arrow-btn px-8 text-center py-3 cursor-pointer bg-dark-slate-blue rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span className="text-cream-primary col-span-2">Anterior</span>
    </div>
  );

  const customRightArrow = (
    <div className="grid grid-cols-3 arrow-btn px-8 text-center py-3 cursor-pointer bg-dark-slate-blue rounded-full">
      <span className="text-cream-primary col-span-2">Siguiente</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="col-span-1 ml-2 h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

  const submitButton = (
    <div className="px-8 text-center py-3 cursor-pointer bg-dark-slate-blue rounded-full">
      <span
        className="text-cream-primary col-span-2"
        onClick={() => handleSubmit()}
      >
        Enviar
      </span>
    </div>
  );

  return (
    <>
      <div className="flex items-center justify-center mt-8">
        <div
          className="group shadow-xl rounded-3xl pb-6 bg-cream-primary"
        >

          {questions.map((question, index) => (
            <div
              key={index}
              style={{ display: index === currentQuestion ? "block" : "none" }}
            >
              <QuestionCard question={question} setAnswer={setAnswer} />
            </div>
          ))}

          <div className='bg-black mb-8'>
            <div className='float-left mx-12' onClick={prevQuestion}>
              {currentQuestion === 0 ? null : customLeftArrow}
            </div>
            <div className='float-right mx-12' onClick={nextQuestion}>
              {currentQuestion === questions.length - 1 ? submitButton : customRightArrow}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default TestPage;
