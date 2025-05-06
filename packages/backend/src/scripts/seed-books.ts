import { PrismaClient } from "../../generated/prisma";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function seedBooks() {
  const books = Array.from({ length: 100 }).map(() => ({
    title: faker.lorem.words(3),
    author: faker.person.fullName(),
    summary: faker.lorem.paragraph(),
    genre: faker.helpers.arrayElement([
      "Fantasy",
      "Science Fiction",
      "Mystery",
      "Romance",
      "Non-fiction",
    ]),
    cover: faker.image.urlPicsumPhotos(),
    readed: faker.datatype.boolean(),
    readedAt: faker.datatype.boolean() ? faker.date.past() : null,
    publisher: faker.company.name(),
    publishedAt: faker.date.past(),
    createdAt: faker.date.past(),
    updatedAt: new Date(),
  }));

  await prisma.book.createMany({
    data: books,
  });

  console.log("Seeded 100 books into the database.");
}

seedBooks()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
