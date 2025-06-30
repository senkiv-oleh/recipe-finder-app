import { Recipe } from './Recipe';

export type RecipeDetailsType = Recipe & {
  readyInMinutes: number;
  cuisines: string[];
  servings: number;
  healthScore: number;
  summary?: string;
  image: string;
  extendedIngredients: [
    {
      id: number;
      original: string;
    }
  ];
};
