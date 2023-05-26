import React from "react";
import { Header } from "@/components";

const History = () => {
    return (
        <>
            <Header />
            <div className='container mx-auto px-10'>
                <div className='grid grid-cols-10 w-full'>
                    <div className='col-span-10 md:col-span-5 lg:col-span-6 py-2 sm:py-6 sm:px-6'>
                        {/* seccion del titulo */}
                        <div className='grid grid-cols-1 xl:px-16'>
                            <span className='text-5xl md:text-4xl lg:text-6xl font-semibold mb-8 text-dark-slate-blue'>Historia</span>
                            <span className='text-sm sm:text-base rounded-lg bg-cream-primary p-8 shadow-lg text-justify xl:p-10'>
                                Descubre la Ciudad Eterna.
                                Roma te espera con su gran historia, arte, cultura y gastronomía.
                                En nuestra página web encontrarás todo lo que necesitas para rememorar
                                la antigua Roma y disfrutar al máximo de su gloria histórica
                                ¡Bienvenidos a Roma!
                            </span>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-5 lg:col-span-4 py-8 sm:px-8 md:px-6 xl:px-10 xl:py-16'>
                        XD
                    </div>
                </div>
            </div>

        </>
    );
}

export default History;