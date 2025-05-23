import { FetchedRecipe } from '@/types/FetchedRecipe';

export function buildSearchParams({
  query,
  cuisine,
  maxReadyTime,
}: FetchedRecipe) {
  const params = new URLSearchParams();

  if (query) params.append('query', query);
  if (cuisine) params.append('cuisine', cuisine);
  if (maxReadyTime) params.append('maxReadyTime', maxReadyTime);

  return params;
}
