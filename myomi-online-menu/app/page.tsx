import CategoryList from "@/components/CategoryList";
import MenuList from "@/components/MenuList";
import { SearchParam } from "@/types";
import { JSX } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<SearchParam> | undefined;
}): Promise<JSX.Element> {
  const params = await searchParams;

  return (
    <main className="bg-[url('/sushi_main_bg.jpg')] bg-no-repeat bg-cover bg-center min-h-screen w-full flex items-center justify-center">
      <CategoryList />
      <MenuList menuList={[]} />
    </main>
  );
}
