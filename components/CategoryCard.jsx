import react from 'react';
import Link from 'next/link';

const CategoryCard = ({ category }) => {
    return (
        <Link href={`/${category.slug}`} data-testid={category.name}>
            <div className='shadow-xl rounded-lg mb-6 bg-cream-primary transition duration-500 hover:bg-cream-secondary hover:-translate-y-2 cursor-pointer'>
                <div className='flex'>
                    <img
                        className='object-cover rounded-t-lg lg:rounded-lg w-1/3'
                        src={category.image}
                        alt={category.name}
                    />

                    <div className='py-6 px-2'>
                        <h3 className="text-lg font-semibold text-dark-slate-blue flex justify-center xl:text-xl xl:mb-2">
                            {category.name}
                        </h3>
                        <span className="flex text-center text-sm text-dark-slate-blue xl:text-lg">
                            {category.description}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CategoryCard;