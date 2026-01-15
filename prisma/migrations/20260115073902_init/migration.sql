-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "pricePerUnit" DOUBLE PRECISION NOT NULL,
    "hesImage" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
