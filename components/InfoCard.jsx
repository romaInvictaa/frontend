import React from "react";
import Link from "next/link";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const customLeftArrow = (
  <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer rounded-full" style={{ backgroundColor: "#948686" }}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  </div>
);

const customRightArrow = (
  <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer rounded-full"  style={{ backgroundColor: "#948686" }}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </div>
);
const PageCard = ({ texts }) => {
  return (
    <div className="mb-8">
      <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-4">
        {texts.map((text, index) => (
          <div key={index} className='group shadow-xl rounded-xl px-12 py-4 mb-6 bg-cream-primary transition duration-500 hover:scale-105 cursor-pointer 
          bg-gradient-to-r from-transparent via-light-gray to-transparent 
          relative hover:before:absolute hover:before:inset-0 hover:before:-translate-x-full hover:before:animate-[shimmer_1s] hover:before:bg-gradient-to-r hover:before:from-transparent hover:before:via-light-gray/25 hover:before:to-transparent 
          isolate overflow-hidden shadow-xl shadow-black/5 before:border-t before:border-light-gray/25'>
          
            <span className="flex text-center text-md text-dark-slate-blue xl:text-lg">
            

                {text}</span>
          
          </div>
        ))}
      </Carousel>
    </div>
  );
};



export default PageCard;