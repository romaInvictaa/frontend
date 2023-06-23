import React from 'react';
import { useState, useEffect } from 'react';
import { Header, PageCard, QuestionCard, Loader, TestFinalPage } from '@/components';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext.jsx';

const QUESTIONS_URL = '/api/questions';

const TestArchitecture = () => {

  const auth = useAuth();
  const user = auth.user;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleRespuesta = (opcionId) => {
    setSeleccionada(opcionId);
  };

  const setAnswer = (answer) => {
    if (answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleSubmit = async () => {
    const response = await fetch(`${QUESTIONS_URL}/art`, {
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
    setFinished(true);
  };


  // Traer las preguntas de la base de datos
  const getQuestions = async () => {
    const response = await fetch(`${QUESTIONS_URL}/Art`);
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
    <div className="grid grid-cols-3 arrow-btn px-8 text-center py-3 cursor-pointer bg-dark-slate-blue rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full col-span-3 md:col-span-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span className="text-cream-primary md:col-span-2 hidden md:inline">Anterior</span>
    </div>
  );

  const customRightArrow = (
    <div className="grid grid-cols-3 arrow-btn px-8 text-center py-3 cursor-pointer bg-dark-slate-blue rounded-full">
      <span className="text-cream-primary md:col-span-2 hidden md:inline">Siguiente</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-6 w-6 text-white w-full col-span-3 md:col-span-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

  const submitButton = (
    <div className="px-4 md:px-8 text-center py-3 cursor-pointer bg-dark-slate-blue rounded-full">
      <span
        className="text-cream-primary text-sm md:text-md"
        onClick={() => handleSubmit()}
      >
        Terminar
      </span>
    </div>
  );

  return (
    <>
      <Header slug={'/art'} />
      <div className="flex items-center justify-center my-8">
        <div
          className="group shadow-xl rounded-3xl pb-6 bg-cream-primary w-11/12 md:w-3/4 xl:w-7/12"
        >
          {finished ? (
            <div>
              <TestFinalPage correctAnswers={correctAnswers} />
            </div>
          ) : (
            <>
              {questions.map((question, index) => (
                <div
                  key={index}
                  className=''
                  style={{ display: index === currentQuestion ? "block" : "none" }}
                >
                  <QuestionCard question={question} setAnswer={setAnswer} />
                  <div className='w-1/3  text-center mx-auto text-4xl font-semibold text-dark-slate-blue mb-4 md:mb-0 md:translate-y-10'>
                    {currentQuestion + 1} / {questions.length}
                  </div>
                </div>
              ))}

              <div className='mb-16'>
                <div className='float-left mx-12' onClick={prevQuestion}>
                  {currentQuestion === 0 ? null : customLeftArrow}
                </div>
                <div className='float-right mx-12' onClick={nextQuestion}>
                  {currentQuestion === questions.length - 1 ? submitButton : customRightArrow}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TestArchitecture;
