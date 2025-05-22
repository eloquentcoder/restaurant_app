"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { api } from "@/trpc/react";

interface RestaurantCardProps {
  id: string;
  name: string;
  description: string;
  rating: number;
  ratingCount: number;
  category: string;
  city: string;
  images: string[];
  priceRange: string;
  featuredText?: string;
  featuredIcon?: string;
  isFavorite: boolean;
}

export function RestaurantCard({
  id,
  name,
  description,
  rating,
  ratingCount,
  category,
  city,
  images,
  priceRange,
  featuredText,
  isFavorite: initialIsFavorite,
}: RestaurantCardProps) {
  const utils = api.useUtils();
  const { mutate: toggleFavorite } = api.restaurant.addFavorite.useMutation({
    onSuccess: () => {
      void utils.restaurant.getRestaurants.invalidate();
    },
  });

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={images[0] ?? "/placeholder.jpg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
            {category}
          </span>
          <button
            onClick={() => toggleFavorite({ restaurantId: id })}
            className="rounded-full p-1 hover:bg-gray-100"
          >
            <Heart
              className={`h-6 w-6 ${
                initialIsFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
              }`}
            />
          </button>
        </div>
        <h3 className="mb-1 text-lg font-semibold">{name}</h3>
        <p className="mb-2 text-sm text-gray-600">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-1 text-yellow-400">★</span>
            <span className="font-semibold">{rating}</span>
            <span className="ml-1 text-sm text-gray-500">
              ({ratingCount} reviews)
            </span>
          </div>
          <span className="text-sm text-gray-500">{priceRange}</span>
        </div>
        {featuredText && (
          <div className="mt-2 flex items-center text-sm text-gray-600">
            <span className="mr-1">⭐</span>
            {featuredText}
          </div>
        )}
      </div>
    </div>
  );
} 