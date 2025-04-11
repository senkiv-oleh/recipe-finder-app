import RecipeList from "@/components/RecipeList";

export default function RecipesPage() {
  return (
    <main className="p-4">
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      <RecipeList />
    </main>
  );
}
