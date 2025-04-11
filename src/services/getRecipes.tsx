import { API_COMPLEX_SEARCH_URL } from "@/constants/apis";
import { FetchedRecipe } from "@/types/FetchedRecipe";

export async function getRecipes({
  query,
  cuisine,
  maxReadyTime,
}: FetchedRecipe) {
  const params = new URLSearchParams();

  if (query) params.append("query", query);
  if (cuisine) params.append("cuisine", cuisine);
  if (maxReadyTime) params.append("maxReadyTime", maxReadyTime);

  params.append("apiKey", process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY!);

  const url = `${API_COMPLEX_SEARCH_URL}?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();  
    throw new Error(`ailed to fetch recipes: ${errorText}`);
  }

  const data = await response.json();

  return data.results || [];
}
