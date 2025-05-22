import { API_COMPLEX_SEARCH_URL } from '@/constants/apis';
import { FetchedRecipe } from '@/types/FetchedRecipe';
import { buildSearchParams } from '@/utils/buildSearchParams';

export async function getRecipes(paramsData: FetchedRecipe) {
  const params = buildSearchParams(paramsData);
  params.append('apiKey', process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY!);

  const url = `${API_COMPLEX_SEARCH_URL}?${params.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch recipes: ${errorText}`);
  }

  const data = await response.json();
  return data.results || [];
}
