import Image from 'next/image'
import { CategoryCard, Header } from '@/components'
import { useAuth } from '../context/AuthContext';

const categories = [
  {
    name: 'Historia',
    description: 'Sumérgete en la fascinante historia de Roma',
    image: '/history.png',
    slug: 'history',
  },
  {
    name: 'Arquitectura',
    description: 'Descubre las edificaciones más impresionantes',
    image: '/arquitectura.png',
    slug: 'architecture',
  },
  {
    name: 'Arte',
    description: 'Un repaso por las grandes obras de arte de Roma',
    image: '/arte.png',
    slug: 'art',
  },
]

export default function Home() {

  return (
    <>
    <Header />
    <div className='container mx-auto px-10'>
      <div className='grid grid-cols-10 w-full'>
        <div className='col-span-10 md:col-span-5 lg:col-span-6 py-2 sm:py-6 sm:px-6'>
          {/* seccion del titulo */}
          <div className='grid grid-cols-1 xl:px-16'>
            <span className='text-md lg:text-xl text-orange-primary font-semibold'>BIENVENIDOS A</span>
            <span className='text-5xl md:text-4xl lg:text-6xl font-semibold mb-8 text-dark-slate-blue' data-testid="title">Roma Invicta</span>
            <span className='text-sm sm:text-base rounded-lg bg-cream-primary p-8 shadow-lg text-justify xl:p-10' data-testid="text">
              Descubre la Ciudad Eterna.
              Roma te espera con su gran historia, arte, cultura y gastronomía.
              En nuestra página web encontrarás todo lo que necesitas para rememorar
              la antigua Roma y disfrutar al máximo de su gloria histórica
              ¡Bienvenidos a Roma!
            </span>
          </div>
          
        </div>
        <div className='col-span-12 md:col-span-5 lg:col-span-4 py-8 sm:px-8 md:px-6 xl:px-10 xl:py-16' data-testid="cards">
          {/* seccion de las categorias */}
          {categories.map((category) => (
            // <div data-testid={category.name} key={category.name}>
              <CategoryCard key={category.name} category={category}/>
            //</div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
