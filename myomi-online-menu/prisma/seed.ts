import { prisma } from "@/lib/prisma";

const addCategories = async () => {
  await prisma.category.createMany({
    data: [
      { id: "appetizer", name: "Appetizer", imgUrl: "/icons/appetizer.png" },
      { id: "salad", name: "Salad", imgUrl: "/icons/salad.png" },
      { id: "tempura", name: "Tempura", imgUrl: "/icons/tempura.png" },
      {
        id: "teriyaki-yakisooba",
        name: "Teriyaki Yakisooba",
        imgUrl: "/icons/teriyaki-yakisoba.png",
      },
      { id: "udon", name: "Udon", imgUrl: "/icons/udon.png" },
      { id: "ramen", name: "Ramen", imgUrl: "/icons/ramen.png" },
      {
        id: "poke-donburi",
        name: "Poke Donburi",
        imgUrl: "/icons/poke-donburi.png",
      },
      { id: "tonkatsu", name: "Tonkatsu", imgUrl: "/icons/tonkatsu.png" },
      { id: "roll", name: "Roll", imgUrl: "/icons/roll.png" },
      {
        id: "oshi-sushi",
        name: "Oshi Sushi",
        imgUrl: "/icons/nigiri.png",
      },
      { id: "nigiri", name: "Nigiri", imgUrl: "/icons/nigiri.png" },
      { id: "aburi", name: "Aburi", imgUrl: "/icons/nigiri.png" },
      { id: "sashimi", name: "Sashimi", imgUrl: "/icons/sashimi.png" },
      {
        id: "special-rolls",
        name: "Special Rolls",
        imgUrl: "/icons/roll.png",
      },
      {
        id: "special-dinner",
        name: "Special Dinner",
        imgUrl: "/icons/special-dinner.png",
      },
      {
        id: "special-lunch",
        name: "Special Lunch",
        imgUrl: "/icons/special-lunch.png",
      },
      {
        id: "party-tray",
        name: "Party Tray",
        imgUrl: "/icons/party-tray.png",
      },
      {
        id: "soft-drinks",
        name: "Soft Drinks",
        imgUrl: "/icons/soft-drinks.png",
      },
    ],
    skipDuplicates: true,
  });
};

addCategories();
