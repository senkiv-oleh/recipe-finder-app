import { Recipe } from './Recipe';

export type RecipeDetails = Recipe & {
  readyInMinutes: number;
  servings: number;
  extendedIngredients: [
    {
      id: number;
      original: string;
    },
  ];
};
