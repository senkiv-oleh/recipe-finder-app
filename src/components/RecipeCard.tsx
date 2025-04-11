import Link from 'next/link';
import { RECIPES_ROUTE } from '@/constants/routs';
import { Recipe } from '@/types/Recipe';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <Link
            href={`${RECIPES_ROUTE}/${recipe.id}`}
            className="border p-4 rounded hover:shadow"
        >
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-medium mt-2">{recipe.title}</h3>
        </Link>
    );
}
