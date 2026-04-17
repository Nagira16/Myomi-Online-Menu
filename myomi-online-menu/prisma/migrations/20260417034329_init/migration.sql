-- CreateEnum
CREATE TYPE "EnumCategory" AS ENUM ('APPETIZER', 'SALAD', 'TEMPURA', 'TERIYAKI_YAKISOBA', 'UDON', 'RAMEN', 'POKE_DONBURI', 'ROLL', 'OSHI_SUSHI', 'TONKATSU', 'NIGIRI', 'ABURI', 'SASHIMI', 'SPECIAL_ROLLS', 'SPECIAL_DINNER', 'SPECIAL_LUNCH', 'PARTY_TRAY', 'SOFT_DRINKS');

-- CreateTable
CREATE TABLE "Dish" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "category" "EnumCategory" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);
