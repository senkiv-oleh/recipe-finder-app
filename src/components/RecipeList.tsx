'use client';

import { useRecipes } from '@/hooks/useRecipes';
import RecipeCard from './RecipeCard';

export default function RecipeList () {
  const { recipes, error, loading } = useRecipes();
  
  if (loading) return <p>Loading...</p>;

  if (!recipes || recipes.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center h-full'>
        <h2 className='text-2xl font-bold mb-4'>No Recipes Found</h2>
        <p className='mb-4'>Try searching for a different recipe or cuisine.</p>
        <p className='text-gray-500 mb-4'>It seems we couldn&#39;t find any recipes matching your search criteria.</p>
        <p className='text-gray-500 mb-4'>You can try searching for different keywords or cuisines.</p>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded'
          onClick={() => window.location.href='/'}
        >
          TRY AGAIN
        </button>
      </div>
    );
  }


  if (error) return <p>{error}</p>;

  return (
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
