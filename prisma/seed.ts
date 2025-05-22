import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const restaurants = [
  {
    rating: 4.2,
    ratingCount: 139,
    category: "YAKITORI",
    city: "osaka",
    description: "Enjoy the highest quality Omakase with unlimited sake at a reasonable price.",
    images: ["https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop"],
    name: "Kagurazaka Ishikawa Sushi Haru Nakanoshima Sushi",
    priceRange: "3~5",
    featuredText: "Top Yakitori Restaurant in Nakanoshima",
    featuredIcon: "stars-02",
    isFavorite: true,
  },
  {
    rating: 4.5,
    ratingCount: 200,
    category: "SUSHI",
    city: "tokyo",
    description: "Provides fresh seafood and authentic sushi.",
    images: ["https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop"],
    name: "Sushi Ginza Ishikawa",
    priceRange: "4~6",
    featuredText: "Top Sushi Restaurant in Tokyo",
    featuredIcon: "stars-02",
    isFavorite: false,
  },
  {
    rating: 4.7,
    ratingCount: 180,
    category: "RAMEN",
    city: "kyoto",
    description: "Rich broth with a variety of toppings.",
    images: ["https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop"],
    name: "Ichiran Ramen",
    priceRange: "2~4",
    featuredText: "Kyoto's Famous Ramen Spot",
    featuredIcon: "stars-02",
    isFavorite: true,
  },
  {
    rating: 4.3,
    ratingCount: 220,
    category: "TEMPURA",
    city: "nagoya",
    description: "Crispy and delicious tempura.",
    images: ["https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop"],
    name: "Tempura Matsuya",
    priceRange: "3~5",
    featuredText: "Best Tempura in Nagoya",
    featuredIcon: "stars-02",
    isFavorite: false,
  },
  {
    rating: 4.6,
    ratingCount: 190,
    category: "SOBA",
    city: "fukuoka",
    description: "Chewy noodles with rich broth.",
    images: ["https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop"],
    name: "Udon Taro",
    priceRange: "2~4",
    featuredText: "Fukuoka's Best Udon Restaurant",
    featuredIcon: "stars-02",
    isFavorite: true,
  },
];

async function main() {
  console.log("Start seeding...");
  
  for (const restaurant of restaurants) {
    await prisma.restaurant.create({
      data: restaurant,
    });
  }
  
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 