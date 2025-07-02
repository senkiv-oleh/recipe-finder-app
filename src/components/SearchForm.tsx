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
  const [cuisine, setCuisine] = useState<string[]>([]);
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

  const handleCuisineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!cuisine.includes(e.target.value) && e.target.value) {
      setCuisine(prev => [...prev, e.target.value]);
    }
  };

  return (
    <div className='space-y-4'>
      <input
        list='recipe-titles'
        type='text'
        placeholder='Search recipes...'
        value={query}
        onChange={e => setQuery(e.target.value)}
        className='w-full p-2 border rounded h-10'
      />
      {showDropdown && suggestions.length > 0 && (
        <ul className='absolute w-[576px] z-10 bg-white border border-gray-200 rounded mt-1 max-h-60 overflow-y-auto shadow-lg'>
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
        className='w-full p-2 border rounded h-10'
        value={cuisine.length > 0 ? cuisine[cuisine.length - 1] : ''}
        onChange={handleCuisineChange}
      >
        <option value=''>Select cuisine</option>
        {cuisines.map(c => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <div className='w-full p-2 min-h-[56px] border border-dashed border-gray-300 rounded flex flex-wrap overflow-hidden justify-start items-center'>
        {cuisine.length === 0 ? (
          <span className='text-md text-gray-500'>Selected cuisines....</span>
        ) : (
          cuisine.map((c, index) => (
            <button
              key={index}
              onClick={() =>
                setCuisine(prev => prev.filter(item => item !== c))
              }
              className='group flex flex-row items-center justify-between gap-2 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded text-lg cursor-pointer mr-2 mb-2'
            >
              {c}
              <svg
                className='h-5 w-5 text-gray-700 shrink-0 group-hover:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='3'
                  d='M6 18 17.94 6M18 18 6.06 6'
                />
              </svg>
            </button>
          ))
        )}
      </div>

      <input
        type='number'
        placeholder='Max preparation time (minutes)'
        value={maxReadyTime}
        onChange={e => setMaxReadyTime(e.target.value)}
        className='w-full p-2 border rounded h-10'
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
