"use client";

import { useRecipes } from "@/hooks/useRecipes"; 
import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  const {recipes, error, loading } = useRecipes(); 

  if (loading) return <p>Loading...</p>; 

  if (error) return <p>{error}</p>; 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
