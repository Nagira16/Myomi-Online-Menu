import { Category, Dish, Prisma } from "@/generated/prisma/browser";

export type SearchParam = {
  category?: Category["id"];
  search?: string;
};

export type MenuProps = {
  menuList: Dish[];
};

export type MenuWithCategory = Prisma.DishGetPayload<{
  include: { category: true };
}>;
