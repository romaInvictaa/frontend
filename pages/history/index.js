import React from "react";
import { Header, PageCard } from "@/components";
import Link from "next/link";
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
          <div className="flex justify-center py-2">
            <span className="text-5xl md:text-4xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue">
              Tesoros de la antigua Roma
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full">
          {pages.map((page, index) => (
            <div className="col-span-2 md:col-span-1 sm:px-6" key={index}>
              <PageCard page={page} />
            </div>
          ))}
        </div>
        {user ? (
        <div className="flex justify-center col-span-2 ">
          <Link href="/art/testart">
            <span className="md:float-left  mt-2 align-middle text-dark-slate-blue ml-4 font-semibold cursor-pointer bg-cream-primary border border-cream-primary rounded-full px-8 py-2 transition duration-300 hover:bg-dark-slate-blue hover:text-light-gray hover:border-dark-slate-blue">
              Test
            </span>
          </Link>
        </div>
        ) : (
          <div className="flex justify-center col-span-2 ">
          </div>
        )}
      </div>
    </>
  );
};

const pages = [
  {
    name: "Romulo y Remo",
    description: "Descubre la historia de Romulo y Remo",
    image: "/carrusel/romulo.jpg",
    slug: "/history/romulo",
  },
  {
    name: "Ruinas de pompeya",
    description: "Descubre la historia de las Ruinas de Pompeya",
    image: "/carrusel/ruinas.jpg",
    slug: "/history/ruinaspompeya",
  },
];

export default History;
