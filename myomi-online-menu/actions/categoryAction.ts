import { Category } from "@/generated/prisma/browser";
import { prisma } from "@/lib/prisma";

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    return await prisma.category.findMany();
  } catch (err) {}
  return [];
};
