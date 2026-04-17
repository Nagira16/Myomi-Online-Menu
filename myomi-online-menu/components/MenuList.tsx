import { Dish } from "@/generated/prisma/browser";
import { JSX } from "react";

function MenuList(menuList: Dish[]): JSX.Element {
  return (
    <div>
      {menuList.map((dish) => (
        <div key={dish.id}></div>
      ))}
    </div>
  );
}

export default MenuList;
