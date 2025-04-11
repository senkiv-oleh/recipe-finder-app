"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  const searchParams = useSearchParams();
  const [recipes, setRecipes] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchRecipes() {
      setLoading(true);
      setError(null);

      try {
        const query = searchParams.get("query");
        const cuisine = searchParams.get("cuisine");
        const maxReadyTime = searchParams.get("maxReadyTime");

        const params = new URLSearchParams();
        if (query) params.append("query", query);
        if (cuisine) params.append("cuisine", cuisine);
        if (maxReadyTime) params.append("maxReadyTime", maxReadyTime);
        params.append("apiKey", process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY!);

        console.log("params =", params.toString());

        const res = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`,
        );
        const data = await res.json();
        setRecipes(data.results || []);
      } catch (err) {
        setError("Failed to load recipes");
        console.error("Error fetching recipes:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, [searchParams]);

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
