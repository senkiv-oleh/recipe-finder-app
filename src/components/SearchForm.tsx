'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cuisines } from '@/constants/cuisines';
import { RECIPES_ROUTE } from '@/constants/routs';
import { buildSearchParams } from '@/utils/buildSearchParams';

export default function SearchForm() {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');
  const [cuisine, setCuisine] = useState<string>('');
  const [maxReadyTime, setMaxReadyTime] = useState<string>('');

  const isValid = query || cuisine || maxReadyTime;

  const handleSearch = () => {
    const params = buildSearchParams({ query, cuisine, maxReadyTime });
    router.push(`${RECIPES_ROUTE}?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <select
        className="w-full p-2 border rounded"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      >
        <option value="">Select cuisine</option>
        {cuisines.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Max preparation time (minutes)"
        value={maxReadyTime}
        onChange={(e) => setMaxReadyTime(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleSearch}
        disabled={!isValid}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        Search
      </button>
    </div>
  );
}
