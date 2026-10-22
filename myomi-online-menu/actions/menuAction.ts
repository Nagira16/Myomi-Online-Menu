"use server";

import { prisma } from "@/lib/prisma";
import { MenuWithCategory } from "@/types";

export const getAllMenus = async (): Promise<MenuWithCategory[]> => {
  try {
    return await prisma.dish.findMany({ include: { category: true } });
  } catch (err) {}
  return [];
};
