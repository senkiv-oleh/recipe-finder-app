import React from 'react';
import { RecipeDetailsType } from '@/types/RecipeDetails';

const RecipeDetails = ({ recipe }: { recipe: RecipeDetailsType }) => {
  return (
    <>
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <p>
        <strong>Ready in:</strong> {recipe.readyInMinutes} minutes
      </p>
      <p>
        <strong>Servings:</strong> {recipe.servings}
      </p>
      <h3 className="text-lg font-semibold mt-4">Ingredients:</h3>
      <ul className="list-disc list-inside">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </>
  );
};

export default RecipeDetails;
