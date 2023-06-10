import React, { useState } from "react";
import Image from "next/image";
import { QuestionImage } from ".";

const QuestionCard = ({ question, setAnswer, marked }) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [answered, setAnswered] = useState(false);

    const egdata = { slug: '/carrusel/colosseum.png', answered: answered, text: "El coliseo romano era utilizado para alojar grandes batallas para entretener a la población romana" }
    if (marked !== undefined) {
        setAnswered(marked);
    }
    // const options = [1,2,3]
    // console.log(question.options);

    // const options = question.options

    const handleSubmit = () => {
        if (answered) return;

        if (question.options[selectedOption] === question.answer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
        setAnswered(true);
        setSelectedOption(null);
    };

    const handleAnswerSelected = (value) => {
        if (answered) return;
        setSelectedOption(value);
        console.log(value);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl mb-8 mx-8 mt-8 font-semibold text-dark-slate-blue flex justify-center xl:text-xl xl:mb-2">
                {question.question}
            </h1>
            <div className="grid grid-cols-12">
                <div className="col-span-8 mx-12 ">
                    <QuestionImage image={egdata} />
                </div>

                <div className="col-span-4 flex flex-col mr-8 mb-6 mt-2">
                    {question.options.map((option, index) => (
                        selectedOption === index ? (
                            <div
                                key={index}
                                className="border border-dark-slate-blue border-2 flex justify-center rounded-3xl mb-3 py-4 px-8 bg-dark-slate-blue scale-105 cursor-pointer transition duration-700"
                                onClick={() => handleAnswerSelected(index)}
                            >
                                <span className="ml-2 text-xl font-semibold text-cream-primary">{option}</span>
                            </div>
                        ) : (

                            answered && question.options[index] === question.answer ? (
                                <div
                                    key={index}
                                    className="border border-dark-slate-blue border-2 flex justify-center rounded-3xl mb-3 py-4 px-8 bg-green-500 scale-105 cursor-pointer transition duration-700"
                                    onClick={() => handleAnswerSelected(index)}
                                >
                                    <span className="ml-2 text-xl font-semibold text-cream-primary">{option}</span>
                                </div>
                            ) : (
                                <div
                                    key={index}
                                    className="border border-dark-slate-blue border-2 flex justify-center rounded-3xl mb-3 py-4 px-8 bg-white transition duration-500 hover:scale-105 cursor-pointer"
                                    onClick={() => handleAnswerSelected(index)}
                                >
                                    <span className="ml-2 text-lg text-dark-slate-blue">{option}</span>
                                </div>
                            )
                        )
                    ))}

                    <div className="flex justify-center mb-8 ml-3 mr-8">
                        <span
                            onClick={() => handleSubmit()}
                            className="md:float-right mt-4 align-middle text-cream-primary text-xl font-semibold cursor-pointer bg-dark-slate-blue border border-dark-slate-blue rounded-full px-8 py-2 transition duration-300 hover:bg-cream-primary hover:text-dark-slate-blue hover:border-cream-primary"
                        >
                            Comprobar
                        </span>

                    </div>
                </div>

            </div>

        </div>
    );
}


export default QuestionCard;