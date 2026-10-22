import { MenuWithCategory } from "@/types";
import { JSX } from "react";

function MenuList({ menuList }: { menuList: MenuWithCategory[] }): JSX.Element {
  return (
    <div>
      {menuList.map((dish) => (
        <div key={dish.id}>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <p>${dish.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default MenuList;
