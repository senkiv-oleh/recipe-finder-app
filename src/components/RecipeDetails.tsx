import React from 'react';
import { RecipeDetailsType } from '@/types/RecipeDetails';
import Image from 'next/image';
import Link from 'next/link';

const RecipeDetails = ({ recipe }: { recipe: RecipeDetailsType }) => {
  return (
    <div className='flex flex-col p-4 flex-1'>
      <Link
        href='/'
        className='group inline-flex items-center transparent justify-center w-12 h-12 rounded-full hover:bg-gray-800 text-white transition
        border border-gray-800 border-2 hover:border-white w-24 mb-4 fixed ml-[-110px] z-10'
      >
        <svg
          className='w-6 h-6 
          text-black group-hover:text-white transition'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='3'
            d='M5 12h14M5 12l4-4m-4 4 4 4'
          />
        </svg>
      </Link>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={500}
        height={300}
        className='w-5xl max-h-100 rounded mb-4'
        style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
        priority={false}
      />

      <h1 className='text-3xl font-bold mb-4'>{recipe.title}</h1>

      <div className='border-t-4 border-b-4 border-gray-300 pl-4 pr-4 py-4 mb-4'>
        <p>
          <strong className='font-semibold'>Cuisine:</strong>{' '}
          {recipe.cuisines.join(', ')}
        </p>
        <p>
          <strong className='font-semibold'>Ready in:</strong>{' '}
          {recipe.readyInMinutes} minutes
        </p>
        <p>
          <strong className='font-semibold'>Servings:</strong> {recipe.servings}
        </p>
        <p>
          <strong className='font-semibold'>Health Score:</strong>{' '}
          {recipe.healthScore}
        </p>
      </div>
      <div>
        <h3 className='text-lg font-semibold mb-2'>Ingredients:</h3>
        <ul className='list-disc list-inside'>
          {recipe.extendedIngredients.map(ingredient => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      </div>
      <h3 className='text-lg font-semibold mb-2 mt-4'>Summary:</h3>
      <p dangerouslySetInnerHTML={{ __html: recipe.summary || '' }}></p>
    </div>
  );
};

export default RecipeDetails;
