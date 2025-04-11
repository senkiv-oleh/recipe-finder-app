"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getRecipes } from "@/services/getRecipes";
import { Recipe } from "@/types/Recipe";

export function useRecipes() {
  const searchParams = useSearchParams();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const query = searchParams.get("query") ?? undefined;
        const cuisine = searchParams.get("cuisine") ?? undefined;
        const maxReadyTime = searchParams.get("maxReadyTime") ?? undefined;

        const result = await getRecipes({ query, cuisine, maxReadyTime });
        setRecipes(result); 
      } catch (err) {
        setError(`"Failed to load recipes. Please check the console for details. ${err}`);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [searchParams]);

  return { recipes, error, loading };
}
