import React from "react";
import { Header, PageCard } from "@/components";

const Home = () => {
    return (
        <>
            <Header slug={"/"}/>
            <div className='container mx-auto px-6 md:px-0'>
                <div className="grid grid-cols-1">
                    {/* <div className="ml-64">
                        <span className='text-md lg:text-xl text-orange-primary font-semibold'>TE PRESENTAMOS</span>
                    </div> */}
                    <div className="flex justify-center py-2">
                        <span className='text-5xl md:text-4xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue' data-testid="title">Tesoros de la antigua Roma</span>
                    </div>
                </div>
                <div className='grid grid-cols-2 w-full' data-testid="cards">
                    {pages.map((page, index) => (
                        <div className='col-span-2 md:col-span-1 sm:px-6' key={index}>

                            <PageCard page={page} />

                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

const pages = [
    {
        name: 'Coliseo',
        description: 'Descubre la historia del gran Coliseo de Roma',
        image: '/colosseum.png',
        slug: '/architecture/colosseum',
    },
    {
        name: 'Panteón',
        description: 'Descubre la historia del gran Panteón de Roma',
        image: '/pantheon.png',
        slug: '/architecture/pantheon',
    }
]



export default Home;