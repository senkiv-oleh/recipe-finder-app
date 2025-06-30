import { Recipe } from './Recipe';

export type RecipeDetailsType = Recipe & {
  readyInMinutes: number;
  servings: number;
  summary?: string;
  image: string;
  extendedIngredients: [
    {
      id: number;
      original: string;
    }
  ];
};
