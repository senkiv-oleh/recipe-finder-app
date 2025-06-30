'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cuisines } from '@/constants/cuisines';
import { RECIPES_ROUTE } from '@/constants/routs';
import { buildSearchParams } from '@/utils/buildSearchParams';
import { getAutocompleteRecipes } from '@/services/getAutocompleteRecipes';

type Suggestion = { id: number; title: string; imageType: string };

export default function SearchForm () {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');
  const [cuisine, setCuisine] = useState<string>('');
  const [maxReadyTime, setMaxReadyTime] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [justClicked, setJustClicked] = useState(false);

  const isValid = query || cuisine || maxReadyTime;

  useEffect(() => {
    if (justClicked) {
      setJustClicked(false);
      return;
    }

    if (query.length < 1) {
      setSuggestions([]);
      setShowDropdown(false);

      return;
    }

    const delay = setTimeout(() => {
      getAutocompleteRecipes(query)
        .then(results => {
          setSuggestions(results);
          setShowDropdown(true);
        })
        .catch(() => {
          setSuggestions([]);
          setShowDropdown(false);
        });
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);

  const handleSearch = () => {
    const params = buildSearchParams({ query, cuisine, maxReadyTime });
    router.push(`${RECIPES_ROUTE}?${params.toString()}`);
  };

  const handleSelect = (title: string) => {
    setQuery(title);
    setShowDropdown(false);
    setJustClicked(true); 
  };

  return (
    <div className='space-y-4'>
      <input
        list='recipe-titles'
        type='text'
        placeholder='Search recipes...'
        value={query}
        onChange={e => setQuery(e.target.value)}
        className='w-full p-2 border rounded'
      />
      {showDropdown && suggestions.length > 0 && (
        <ul className='absolute w-2xl z-10 bg-white border border-gray-200 rounded mt-1 max-h-60 overflow-y-auto shadow-lg'>
          {suggestions.map(item => (
            <li
              key={item.id}
              className='px-4 py-2 cursor-pointer hover:bg-blue-100'
              onClick={() => handleSelect(item.title)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
      <select
        className='w-full p-2 border rounded'
        value={cuisine}
        onChange={e => setCuisine(e.target.value)}
      >
        <option value=''>Select cuisine</option>
        {cuisines.map(c => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input
        type='number'
        placeholder='Max preparation time (minutes)'
        value={maxReadyTime}
        onChange={e => setMaxReadyTime(e.target.value)}
        className='w-full p-2 border rounded'
      />
      <button
        onClick={handleSearch}
        disabled={!isValid}
        className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'
      >
        Search
      </button>
    </div>
  );
}
