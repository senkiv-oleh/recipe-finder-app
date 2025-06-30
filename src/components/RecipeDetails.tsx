import React from 'react';
import { RecipeDetailsType } from '@/types/RecipeDetails';
import Image from 'next/image';

const RecipeDetails = ({ recipe }: { recipe: RecipeDetailsType }) => {
  return (
    <div className='flex flex-col p-4 flex-1'>
    
      <h1 className='text-3xl font-bold mb-4'>{recipe.title}</h1>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={500}
        height={300}
        className='w-5xl h-100 rounded mb-4'
        style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
        priority={false}
      />
      <p>
        <strong>Ready in:</strong> {recipe.readyInMinutes} minutes
      </p>
      <p>
        <strong>Servings:</strong> {recipe.servings}
      </p>
      <h3 className='text-lg font-semibold mt-4'>Ingredients:</h3>
      <ul className='list-disc list-inside'>
        {recipe.extendedIngredients.map(ingredient => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>{' '}
      <p className='mt-4 max-w-2xl'>
        <strong>About:</strong>{' '}
        <p dangerouslySetInnerHTML={{ __html: recipe.summary || '' }}></p>
      </p>
    </div>
  );
};

export default RecipeDetails;
