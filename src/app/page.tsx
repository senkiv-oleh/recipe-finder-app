'use client';

import SearchForm from '../components/SearchForm';

export default function SearchPage() {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold">Recipe Finder</h1>
      <div className="w-[576px]">
        <SearchForm />
      </div>
    </div>
  );
}
