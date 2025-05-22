import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const restaurantRouter = createTRPCRouter({
  getRestaurants: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.restaurant.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  addFavorite: publicProcedure
    .input(z.object({ restaurantId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const restaurant = await ctx.db.restaurant.findUnique({
        where: { id: input.restaurantId },
      });

      if (!restaurant) {
        throw new Error("Restaurant not found");
      }

      // Toggle the isFavorite field
      const updatedRestaurant = await ctx.db.restaurant.update({
        where: { id: input.restaurantId },
        data: {
          isFavorite: !restaurant.isFavorite,
        },
      });

      return { isFavorite: updatedRestaurant.isFavorite };
    }),
}); 