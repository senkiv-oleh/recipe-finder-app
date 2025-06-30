// services/recipeService.ts

export const getAutocompleteRecipes = async (query: string, number = 5): Promise<{ id: number; title: string; imageType: string }[]> => {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY; 
  const url = `https://api.spoonacular.com/recipes/autocomplete?number=${number}&query=${encodeURIComponent(query)}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching autocomplete recipes:', error);
    return [];
  }
};
