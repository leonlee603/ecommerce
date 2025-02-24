import { PrismaClient } from "@prisma/client";
import sampleData from "@/db/sample-data";

const prisma = new PrismaClient();

async function main() {
  // Delete existing records (optional, use with caution)
  await prisma.product.deleteMany({});
  await prisma.account.deleteMany({});
  await prisma.session.deleteMany({});
  await prisma.verificationToken.deleteMany({});
  await prisma.user.deleteMany({});

  await prisma.product.createMany({ data: sampleData.products });
  // await prisma.account.createMany({ data: sampleData.accounts });
  // await prisma.session.createMany({ data: sampleData.sessions });
  // await prisma.verificationToken.createMany({ data: sampleData.verificationTokens });
  await prisma.user.createMany({ data: sampleData.users });

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
