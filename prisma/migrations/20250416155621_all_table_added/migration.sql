-- CreateEnum
CREATE TYPE "BikeBrand" AS ENUM ('Honda', 'Yamaha');

-- CreateEnum
CREATE TYPE "ServiceStatus" AS ENUM ('pending', 'inProgess', 'done');

-- CreateTable
CREATE TABLE "Bike" (
    "bikeId" TEXT NOT NULL,
    "brand" "BikeBrand" NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("bikeId")
);

-- CreateTable
CREATE TABLE "ServiceRecord" (
    "serviceId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "serviceDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "status" "ServiceStatus" NOT NULL,

    CONSTRAINT "ServiceRecord_pkey" PRIMARY KEY ("serviceId")
);

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceRecord" ADD CONSTRAINT "ServiceRecord_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
