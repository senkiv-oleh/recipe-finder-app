import { API_RECIPES_URL } from "@/constants/apis";

export async function getRecipe(id: string) {
  try {
    const response = await fetch(`${API_RECIPES_URL}/${id}/information?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch recipe: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch recipe: ${error}`);
  }
}
