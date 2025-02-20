import { PrismaClient } from "@prisma/client";
import sampleData from "@/db/sample-data";

const prisma = new PrismaClient();

async function main() {
  // Delete existing records (optional, use with caution)
  await prisma.product.deleteMany({});

  await prisma.product.createMany({ data: sampleData.products });

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
