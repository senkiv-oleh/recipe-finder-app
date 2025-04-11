import { getRecipe } from '@/services/getRecipe';
import { RecipeDetails } from '@/types/RecipeDetails';

export default async function RecipeDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  let recipe: RecipeDetails | null = null;

  try {
    recipe = await getRecipe(id);
  } catch (error) {
    console.error("Failed to fetch recipe:", error);
  }

  if (!recipe) {
    return <p>Recipe not found or failed to load</p>;
  }

  return (
    <div className="space-y-2">
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
    </div>
  );
}
