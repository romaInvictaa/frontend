import React from "react";
import { Header, PageCard } from "@/components";

const testarchitecture = () => {
    return (
        <>
            <Header slug={"/architecture"} />
            <div className='container mx-auto px-6 md:px-0'>
                <div className="grid grid-cols-1">
                    {/* <div className="ml-64">
                        <span className='text-md lg:text-xl text-orange-primary font-semibold'>TE PRESENTAMOS</span>
                    </div> */}
                    <div className="flex justify-center py-2">
                        <span className='text-5xl md:text-4xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue'>Tesoros de la antigua Roma</span>
                    </div>
                </div>
                <div className='grid grid-cols-2 w-full'>
                    {pages.map((page, index) => (
                        <div className='col-span-2 md:row-span-1 md:col-span-1 sm:px-6' key={index}>

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
        name: 'Augusto prima porta',
        description: 'Descubre la historia del gran Augusto prima porta',
        image: '/primaporta.jpeg',
        slug: '/test/test1',
    },
    {
        name: 'Mosaico de issos',
        description: 'Descubre la historia del gran Mosaico de issos',
        image: '/carrusel/mosaico.jpg',
        slug: '/test/test2',
    }
]



export default testarchitecture;