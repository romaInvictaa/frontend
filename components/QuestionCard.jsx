import React, { useState } from "react";


const QuestionCard = ({ question }) => {
    
    const [selectedOption, setSelectedOption] = useState(null);
    // const options = question.options;
    const options = [1,2,3]
    console.log(question.options);

    // const options = question.options

    const handleEnvio = () => {
        // setNumeroPregunta(numeroPregunta + 1);
        // console.log(answer);
        // if (opciones[seleccionada - 1].texto == answer) {
        //     alert('Todo bien manito');
        // } else {
        //     alert('Se equivocó perro hpta');
        // }
        // setActualizarInfo(true);
        // setSeleccionada(null);
        console.log('enviado');
    };

    const handleAnswerSelected = (value) => {
        setSelectedOption(value);
    };

    return (
        <div className="">
            <div className="container mx-auto">
                <h1 className="text-3xl mx-8 mt-8 font-semibold text-dark-slate-blue flex justify-center xl:text-xl xl:mb-2">
                    {question.question}
                </h1>
                <div className="col-span-2 ml-12">
                    <img
                        className="rounded-xl"
                        src={'/carrusel/colosseum.png'}
                        width={500}
                    />
                </div>
                <div className="flex flex-col mx-8 mb-6 mt-2">
                    {options.map((option, index) => (
                        <label
                            key={index}
                            className="group shadow-xl rounded-3xl mb-2 py-4 px-2 bg-white transition duration-500 hover:scale-105 cursor-pointer"
                        >
                            <input
                                type="radio" // Cambiar el tipo de checkbox a radio
                                className="form-radio h-3 w-5 text-blue-500"
                                checked={index === selectedOption} // Comprobar si la opción es igual a la opción seleccionada
                                onChange={() => handleAnswerSelected(index)}
                            />
                            <span className="ml-2 text-lg">{option}</span>
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
    );
}

export default QuestionCard;
