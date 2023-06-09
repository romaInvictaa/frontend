import React from 'react';
import { useState, useEffect } from 'react';
import { Header, PageCard, QuestionCard } from '@/components';
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
    setQuestion(ans);
    // setOption1(ans[0].option1);
    // setOption2(ans[0].option2);
    // setOption3(ans[0].option3);
    // setOption4(ans[0].option4);
    // setAnswer(ans[0].answer);
  };
  
  useEffect(() => {
    getQuestion(numeroPregunta);
    setActualizarInfo(false);
  }, []);

  // console.log(question);

  return (
    <>
      <Header slug={'/architecture'} />
      <div className="flex items-center justify-center mt-8">
        <div
          className="group shadow-xl rounded-3xl mb-6 bg-cream-primary transition duration-500 hover:scale-105 cursor-pointer "
        >
          <QuestionCard question={question} />
        </div>
      </div>
    </>
  );
};

export default testarchitecture;
