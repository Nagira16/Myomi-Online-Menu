import { Category, Dish } from "@/generated/prisma/browser";

export type SearchParam = {
  category?: Category["id"];
  search?: string;
};

export type MenuProps = {
  menuList: Dish[];
};
