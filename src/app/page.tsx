"use client";

import SearchForm from "../components/SearchForm";

export default function SearchPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Recipe Finder</h1>
      <SearchForm />
    </div>
  );
}
