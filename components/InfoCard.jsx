import React from "react";
import Link from "next/link";

const PageCard = ({ text }) => {
    return (
        <div className='group shadow-xl rounded-3xl mb-6 bg-cream-primary transition duration-500 hover:scale-105 cursor-pointer 
                            bg-gradient-to-r from-transparent via-light-gray to-transparent 
                            relative hover:before:absolute hover:before:inset-0 hover:before:-translate-x-full hover:before:animate-[shimmer_1s] hover:before:bg-gradient-to-r hover:before:from-transparent hover:before:via-light-gray/25 hover:before:to-transparent 
                            isolate overflow-hidden shadow-xl shadow-black/5 before:border-t before:border-light-gray/25'>

            <div className="mt-4 flex justify-center px-8 py-4">
                <span className="flex text-center text-md text-dark-slate-blue xl:text-lg">
                    {text}
                </span>
            </div>
        </div>
    );
};

export default PageCard;