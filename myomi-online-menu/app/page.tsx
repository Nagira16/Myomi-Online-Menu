import { getAllMenus } from "@/actions/menuAction";
import CategoryList from "@/components/CategoryList";
import MenuList from "@/components/MenuList";
import SearchBar from "@/components/SearchBar";
import { filterMenus } from "@/lib/filteredMenus";
import { MenuWithCategory, SearchParam, MenuProps } from "@/types";
import { JSX } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<SearchParam> | undefined;
}): Promise<JSX.Element> {
  const params = await searchParams;

  const allMenus: MenuWithCategory[] = await getAllMenus();

  const menus: MenuWithCategory[] = params
    ? await filterMenus(params)
    : allMenus;

  return (
    <main className="bg-[url('/background.jpg')] bg-no-repeat bg-cover bg-center min-h-screen w-full flex flex-col items-center space-y-5">
      <section className="w-full flex justify-end pr-30 mt-5">
        <SearchBar />
      </section>
      <section className="w-full flex justify-center shrink-0">
        <CategoryList />
      </section>
      <section className="w-full flex justify-center mt-10">
        <MenuList menuList={menus} />
      </section>
    </main>
  );
}
