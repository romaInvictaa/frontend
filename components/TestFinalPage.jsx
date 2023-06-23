import React from 'react';
import { useState, useEffect } from 'react';
import { Header, QuestionCard, Loader } from '@/components';
import { useAuth } from '@/context/AuthContext.jsx';
import Image from 'next/image';

const QUESTIONS_URL = '/api/questions';

const TestFinalPage = ({ correctAnswers }) => {


    // console.log(questions);


    return (
        <>
            <div className="flex items-center justify-center mt-8">
                <div className="grid grid-cols-12">
                    <div className='col-span-12 mb-8 px-2'>
                        <h1 className='text-2xl md:text-3xl text-center font-bold text-dark-slate-blue col-span-2'>¡Has acertado {correctAnswers} preguntas!</h1>  
                    </div>
                    
                    <div className="col-span-12 md:col-span-6 mx-8 xl:mx-12 h-full pt-auto">
                        <Image className="rounded-3xl md:mt-12 lg:mt-0" src={correctAnswers > 3 ? "/romanoVictoria.png" : "/emperador.jpg"} width={500} height={500} />
                    </div>
                    <div className="col-span-12 md:col-span-6 mx-8 md:mr-8 mb-6 mt-2">

                        <h1 className='text-3xl font-semibold text-center text-dark-slate-blue col-span-2 mb-8 pt-4'>{texts[correctAnswers].title}</h1>
                        <span className="text-lg lg:text-2xl text-dark-slate-blue flex text-center col-span-2 ">{texts[correctAnswers].text}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestFinalPage;

const texts = [
    {
        title: "¡Oh no!",
        text: "Has fallado el test de conocimiento. Pero no te desanimes, ¡puedes seguir informándote en la página y volver a intentar cuando quieras!"
    },
    {
        title: "¡Oh no!",
        text: "Has fallado el test de conocimiento. Pero no te desanimes, ¡puedes seguir informándote en la página y volver a intentar cuando quieras!"
    },
    {
        title: "¡Has fallado!",
        text: "Has fallado el test de conocimiento. ¡Debes estudiar más para destacar en el imperio!"
    },
    {
        title: "¡Muy cerca!",
        text: "Has estado muy cerca. Sigue esforzandote guerrero, la victoria está cerca."
    },
    {
        title: "¡Enhorabuena!",
        text: "Has aprobado el test de conocimiento. ¡Sigue así guerrero!"
    },
    {
        title: "¡Perfecto!",
        text: "Has aprobado el test con un puntaje perfecto. ¡El mismísimo emperador estaría orgulloso!"
    },
]