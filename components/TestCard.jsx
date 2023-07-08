import React from "react";
import Link from 'next/link'
import Image from "next/image";

const TestCard = ({ href }) => {
    console.log(href);

    return (
        <div className="flex justify-center">
                <div className='px-4 py-2 shadow-xl rounded-lg mb-6 bg-cream-primary'>
                    <div className='flex'>
                        <Image
                            src={'/cesar.png'}
                            height={100}
                            width={115}
                        />

                        <div className='py-6 px-2'>
                            <h3 className="text-xl font-semibold text-dark-slate-blue flex justify-center mb-6">
                               ¿Estas preparado?
                            </h3>
                            <Link href={href}>
                            <div className="bg-dark-slate-blue whitespace-nowrap text-sm text-cream-primary rounded-full px-4 py-2 transition duration-500 hover:-translate-y-2 cursor-pointer">
                                Prueba de conocimiento
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default TestCard;