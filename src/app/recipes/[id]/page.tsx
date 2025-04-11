async function getRecipe(id: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`,
    {
      next: { revalidate: 60 },
    },
  );
  if (!res.ok) throw new Error("Failed to fetch recipe");
  return res.json();
}

export default async function RecipeDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const recipe = await getRecipe(params.id);

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
        {recipe.extendedIngredients.map((ing: any) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
    </div>
  );
}
