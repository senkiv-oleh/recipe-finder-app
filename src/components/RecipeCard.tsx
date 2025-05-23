import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '@/types/Recipe';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="bg-white p-4 rounded shadow hover:shadow-md"
    >
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={400}
        height={192}
        className="w-full h-48 object-cover rounded"
        style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
        priority={false}
      />

      <h3 className="mt-2 font-semibold">{recipe.title}</h3>
    </Link>
  );
}
