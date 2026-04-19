import CategoryList from "@/components/CategoryList";

export default function Home() {
  return (
    <main className="bg-[url('/sushi_main_bg.jpg')] bg-no-repeat bg-cover bg-center min-h-screen w-full flex items-center justify-center">
      <CategoryList />
    </main>
  );
}
