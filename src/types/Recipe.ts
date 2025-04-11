export type Recipe = {
  id: string; 
  title: string;
  image: string;
  readyInMinutes?: number;
  servings?: number;
  extendedIngredients?: {
    id?: number;
    original?: string;
  };

}
