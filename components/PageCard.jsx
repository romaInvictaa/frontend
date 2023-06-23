import React from "react";
import Link from "next/link";

const PageCard = ({ page }) => {
    
    return (
        <Link href={`${page.slug}`} data-testid={page.name}>
            <div className='group shadow-xl rounded-3xl mb-6 bg-cream-primary transition duration-500 hover:scale-105 cursor-pointer 
                            bg-gradient-to-r from-transparent via-light-gray to-transparent 
                            relative hover:before:absolute hover:before:inset-0 hover:before:-translate-x-full hover:before:animate-[shimmer_1s] hover:before:bg-gradient-to-r hover:before:from-transparent hover:before:via-light-gray/25 hover:before:to-transparent 
                            isolate overflow-hidden shadow-xl shadow-black/5 before:border-t before:border-light-gray/25'>

                <div className='grid grid-cols-1'>
                    <div className='col-span-1'>
                        <img
                            className='rounded-3xl'
                            src={page.image}
                            alt={page.name}
                            width={1000}
                        />
                    </div>
                    <div className='col-span-1 px-2 px-8 py-4'>
                        <h3 className="text-3xl font-semibold text-dark-slate-blue flex justify-center xl:text-xl xl:mb-2">
                            {page.name}
                        </h3>
                        <div className="mt-4 flex justify-center">
                            <span className="flex text-center text-md text-dark-slate-blue xl:text-lg">
                                {page.description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PageCard;