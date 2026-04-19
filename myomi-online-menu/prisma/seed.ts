import { prisma } from "@/lib/prisma";

const addCategories = async () => {
  await prisma.category.createMany({
    data: [
      {
        id: "special-rolls",
        name: "Special Rolls",
        imgUrl: "/icons/special-rolls.jpg",
      },
      { id: "appetizer", name: "Appetizer", imgUrl: "/icons/appetizer.jpg" },
      { id: "salad", name: "Salad", imgUrl: "/icons/salad.jpg" },
      { id: "tempura", name: "Tempura", imgUrl: "/icons/tempura.jpg" },
      {
        id: "teriyaki-yakisooba",
        name: "Teriyaki Yakisooba",
        imgUrl: "/icons/teriyaki-yakisooba.jpg",
      },
      { id: "udon", name: "Udon", imgUrl: "/icons/udon.jpg" },
      { id: "ramen", name: "Ramen", imgUrl: "/icons/ramen.jpg" },
      {
        id: "poke-donburi",
        name: "Poke Donburi",
        imgUrl: "/icons/poke-donburi.jpg",
      },
      { id: "roll", name: "Roll", imgUrl: "/icons/roll.jpg" },
      {
        id: "oshi-sushi",
        name: "Oshi Sushi",
        imgUrl: "/icons/oshi-sushi.jpg",
      },
      { id: "tonkatsu", name: "Tonkatsu", imgUrl: "/icons/tonkatsu.jpg" },
      { id: "nigiri", name: "Nigiri", imgUrl: "/icons/nigiri.jpg" },
      { id: "aburi", name: "Aburi", imgUrl: "/icons/aburi.jpg" },
      { id: "sashimi", name: "Sashimi", imgUrl: "/icons/sashimi.jpg" },
      {
        id: "special-dinner",
        name: "Special Dinner",
        imgUrl: "/icons/special-dinner.jpg",
      },
      {
        id: "special-lunch",
        name: "Special Lunch",
        imgUrl: "/icons/special-lunch.jpg",
      },
      {
        id: "party-tray",
        name: "Party Tray",
        imgUrl: "/icons/party-tray.jpg",
      },
      {
        id: "soft-drinks",
        name: "Soft Drinks",
        imgUrl: "/icons/soft-drinks.jpg",
      },
    ],
    skipDuplicates: true,
  });
};
