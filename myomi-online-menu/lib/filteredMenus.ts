import { getAllMenus } from "@/actions/menuAction";
import { MenuWithCategory, SearchParam } from "@/types";

export async function filterMenus(
  params: SearchParam,
): Promise<MenuWithCategory[]> {
  const menus: MenuWithCategory[] = await getAllMenus();
  return menus.filter((menu) => {
    const matchesCategory =
      !params?.category || menu.category.id === params.category;

    const matchesSearch =
      !params?.search ||
      menu.name.toLowerCase().includes(params.search.toLowerCase());

    return matchesCategory && matchesSearch;
  });
}
