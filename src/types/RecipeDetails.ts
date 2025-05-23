import { Recipe } from './Recipe';

export type RecipeDetailsType = Recipe & {
  readyInMinutes: number;
  servings: number;
  extendedIngredients: [
    {
      id: number;
      original: string;
    },
  ];
};
