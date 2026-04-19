import { getAllCategories } from "@/actions/categoryAction";
import { Category } from "@/generated/prisma/browser";

import { JSX } from "react";

async function CategoryList(): Promise<JSX.Element> {
  const categories: Category[] = await getAllCategories();
  console.log(categories);

  return (
    <div className="w-full grid grid-cols-4 px-15 gap-20">
      {categories.map((category) => (
        <div className="text-center" key={category.id}>
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
