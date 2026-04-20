import { getAllCategories } from "@/actions/categoryAction";
import { Category } from "@/generated/prisma/browser";
import Image from "next/image";
import Link from "next/link";

import { JSX } from "react";

async function CategoryList(): Promise<JSX.Element> {
  const categories: Category[] = await getAllCategories();

  return (
    <>
      {categories.length === 0 ? (
        <p className="text-center text-white text-2xl">No categories found.</p>
      ) : (
        <ul className="w-full grid grid-cols-5 px-15 gap-5 group">
          {categories.map((category) => (
            <li
              key={category.id}
              className="text-center flex flex-col items-center space-y-2 
                 transition-transform cursor-pointer 
                 hover:scale-105 
                 group-hover:grayscale hover:grayscale-0!"
            >
              <Link href={`/?category=${category.id}`}>
                <Image
                  src={category.imgUrl}
                  alt={category.name}
                  width={100}
                  height={100}
                  className="transition"
                />
                <p className="text-white text-lg font-bold">{category.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default CategoryList;
