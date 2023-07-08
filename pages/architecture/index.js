import React from "react";
import { Header, PageCard, TestCard } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from '../../context/AuthContext.jsx';

const History = () => {
  const auth = useAuth();
  const user = auth.user;
  return (
    <>
      <Header slug={"/"} />
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1">
          {/* <div className="ml-64">
                        <span className='text-md lg:text-xl text-orange-primary font-semibold'>TE PRESENTAMOS</span>
                    </div> */}
          <div className="flex justify-center py-2" data-testid="title">
            <span className="text-5xl md:text-4xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue">
              Tesoros de la antigua Roma
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full" data-testid="cards">
          {pages.map((page, index) => (
            <div className="col-span-2 md:col-span-1 sm:px-12" key={index}>
              <PageCard page={page} />
            </div>
          ))}
        </div>
        {user ? (
          <TestCard href={"/architecture/testarchitecture"}/>
        ) : (
          <div className="flex justify-center">
          <div className='px-4 py-2 shadow-xl rounded-lg mb-6 bg-cream-primary md:w-1/2 lg:w-1/3'>
                    <div className='flex'>
                        <Image
                            src={'/cesar.png'}
                            height={100}
                            width={115}
                        />

                        <div className='py-6 px-2'>
                            <h3 className="text-lg font-semibold text-dark-slate-blue flex justify-center">
                               Inicia sesión para realizar la prueba de conocimiento
                            </h3>
                        </div>
                    </div>
                </div>
          </div>
        )}
      </div>
    </>
  );
};

const pages = [
  {
    name: "Coliseo",
    description: "Descubre la historia del gran Coliseo de Roma",
    image: "/carrusel/colosseum.png",
    slug: "/architecture/colosseum",
  },
  {
    name: "Panteón",
    description: "Descubre la historia del gran Panteón de Roma",
    image: "/carrusel/pantheon.png",
    slug: "/architecture/pantheon",
  },
];

export default History;
