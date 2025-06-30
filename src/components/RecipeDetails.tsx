import React from 'react';
import { RecipeDetailsType } from '@/types/RecipeDetails';
import Image from 'next/image';

const RecipeDetails = ({ recipe }: { recipe: RecipeDetailsType }) => {
  return (
    <div className='flex flex-col p-4 flex-1'>
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
          <p className='mt-2'>
            <strong className='font-semibold'>Ready in:</strong>{' '}
            {recipe.readyInMinutes} minutes
          </p>
          <p className=' mt-2'>
            <strong className='font-semibold'>Servings:</strong>{' '}
            {recipe.servings}
          </p>
          <p className='mt-2'>
            <strong className='font-semibold'>Health Score:</strong>{' '}
            {recipe.healthScore}
          </p>
        </div>
        <div>
          <h3 className='text-lg font-semibold mt-4'>Ingredients:</h3>
          <ul className='list-disc list-inside'>
            {recipe.extendedIngredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
      <h3 className='text-lg font-semibold mt-4'>Summary:</h3>
      <p dangerouslySetInnerHTML={{ __html: recipe.summary || '' }}></p>
    </div>
  );
};

export default RecipeDetails;
