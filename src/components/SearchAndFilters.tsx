"use client";

import { useState } from "react";

const categories = [
  "ALL",
  "SUSHI",
  "UNAGI",
  "TEMPURA",
  "TONKATSU",
  "YAKITORI",
  "SUKIYAKI",
  "SOBA",
  "RAMEN",
  "YAKISOBA",
  "OKONOMIYAKI",
  "DONBURI",
  "ODEN",
  "KAISEKI",
  "HAMBAGU",
  "TEPPANYAKI",
  "CURRY",
  "YAKINIKU",
  "NABE",
  "CAFE",
  "IZAKAYA",
  "OTHER",
] as const;

interface SearchAndFiltersProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

export function SearchAndFilters({
  onSearch,
  onCategoryChange,
  selectedCategory,
}: SearchAndFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="mb-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for the name of the restaurant"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            onSearch(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
} 