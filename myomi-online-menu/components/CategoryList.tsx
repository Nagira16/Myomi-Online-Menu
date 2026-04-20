import { getAllCategories } from "@/actions/categoryAction";
import { Category } from "@/generated/prisma/browser";

import { JSX } from "react";

async function CategoryList(): Promise<JSX.Element> {
  const categories: Category[] = await getAllCategories();
  console.log(categories);

  return (
    <ul className="w-full grid grid-cols-4 px-15 gap-20">
      {categories.map((category) => (
        <li className="text-center" key={category.id}>
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
