import { MenuProps } from "@/types";
import { JSX } from "react";

function MenuList({ menuList }: MenuProps): JSX.Element {
  return (
    <div>
      {menuList.map((dish) => (
        <div key={dish.id}></div>
      ))}
    </div>
  );
}

export default MenuList;
