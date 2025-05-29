import { getRecipe } from '@/services/getRecipe';
import { RecipeDetailsType } from '@/types/RecipeDetails';
import RecipeDetails from '@/components/RecipeDetails';

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let recipe: RecipeDetailsType | null = null;

  try {
    recipe = await getRecipe(id);
  } catch (error) {
    console.error('Failed to fetch recipe:', error);
  }

  if (!recipe) {
    return <p>Recipe not found or failed to load</p>;
  }

  return (
    <div className="space-y-2">
      <RecipeDetails recipe={recipe} />
    </div>
  );
}
