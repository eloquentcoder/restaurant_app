"use client";

import { useState } from "react";
import { api } from "@/trpc/react";
import { RestaurantCard } from "@/components/RestaurantCard";
import { SearchAndFilters } from "@/components/SearchAndFilters";

interface Restaurant {
  id: string;
  name: string;
  description: string;
  rating: number;
  ratingCount: number;
  category: string;
  city: string;
  images: string[];
  priceRange: string;
  featuredText: string | null;
  featuredIcon: string | null;
  isFavorite: boolean;
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const { data: restaurants = [] } = api.restaurant.getRestaurants.useQuery();

  const filteredRestaurants = restaurants.filter((restaurant: Restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "ALL" || restaurant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Restaurants</h1>
      <SearchAndFilters
        onSearch={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRestaurants.map((restaurant: Restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            description={restaurant.description}
            rating={restaurant.rating}
            ratingCount={restaurant.ratingCount}
            category={restaurant.category}
            city={restaurant.city}
            images={restaurant.images}
            priceRange={restaurant.priceRange}
            featuredText={restaurant.featuredText ?? undefined}
            featuredIcon={restaurant.featuredIcon ?? undefined}
            isFavorite={restaurant.isFavorite}
          />
        ))}
      </div>
    </main>
  );
}
