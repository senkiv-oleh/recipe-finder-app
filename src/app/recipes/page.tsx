import { getRecipes } from '@/services/getRecipes';
import { Recipe } from '@/types/Recipe';
import RecipeCard from '@/components/RecipeCard';
import { FetchedRecipe } from '@/types/FetchedRecipe';

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<FetchedRecipe>;
}) {
  let recipes = [];
    const resolvedSearchParams = await searchParams;


  try {
    recipes = await getRecipes({
      query: resolvedSearchParams?.query || '',
      cuisine: resolvedSearchParams?.cuisine
        ? Array.isArray(resolvedSearchParams.cuisine)
          ? resolvedSearchParams.cuisine
          : [resolvedSearchParams.cuisine]
        : undefined,
      maxReadyTime: resolvedSearchParams?.maxReadyTime || '',
    });
  } catch (error) {
    console.error('Failed to fetch recipes:', error);
  }

  if (!recipes || recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe: Recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
