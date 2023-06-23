import React from "react";

const QuestionImage = ({ image }) => {

    console.log(image);

    return (
        <div className="relative h-96">
            <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-96" style={{ backgroundImage: `url('${image.url}')` }} />

            {image.answered && (
                <>
                    <div className="transition duration-1000 absolute rounded-lg bg-center bg-gradient-to-b opacity-70 from-gray-400 via-gray-700 to-black w-full h-96" />
                    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                        <p className="text-cream-primary mb-4 text-shadow font-semibold text-2xl text-center">{image.text}</p>
                    </div>
                </>
            )}
            
        </div>
    );

}

export default QuestionImage;
