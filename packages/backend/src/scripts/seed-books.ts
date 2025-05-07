import { PrismaClient } from "../../generated/prisma";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function seedBooks() {
  const books = [
    {
      id: faker.string.uuid(),
      title: "1984",
      author: "George Orwell",
      summary:
        "Um romance distópico sobre vigilância, opressão e controle do Estado.",
      genre: "Ficção científica",
      cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
      readed: true,
      readedAt: "2023-07-15T10:30:00Z",
      publisher: "Secker & Warburg",
      publishedAt: "1949-06-08T00:00:00Z",
      createdAt: "2025-01-01T12:00:00Z",
      updatedAt: "2025-01-10T08:45:00Z",
    },
    {
      id: faker.string.uuid(),
      title: "Dom Casmurro",
      author: "Machado de Assis",
      summary:
        "O ciúme doentio de Bentinho coloca em dúvida a fidelidade de Capitu.",
      genre: "Romance",
      cover: "https://covers.openlibrary.org/b/id/10433354-L.jpg",
      readed: false,
      readedAt: null,
      publisher: "Editora Garnier",
      publishedAt: "1899-01-01T00:00:00Z",
      createdAt: "2025-01-20T14:10:00Z",
      updatedAt: "2025-02-05T09:00:00Z",
    },
    {
      id: faker.string.uuid(),
      title: "O Senhor dos Anéis: A Sociedade do Anel",
      author: "J.R.R. Tolkien",
      summary: "Frodo inicia uma jornada épica para destruir o Um Anel.",
      genre: "Fantasia",
      cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
      readed: true,
      readedAt: "2022-12-20T18:00:00Z",
      publisher: "Allen & Unwin",
      publishedAt: "1954-07-29T00:00:00Z",
      createdAt: "2025-01-10T10:00:00Z",
      updatedAt: "2025-03-01T11:30:00Z",
    },
    {
      id: faker.string.uuid(),
      title: "O Pequeno Príncipe",
      author: "Antoine de Saint-Exupéry",
      summary:
        "Uma fábula filosófica sobre a infância, o amor e o essencial invisível aos olhos.",
      genre: "Fábula",
      cover: "https://covers.openlibrary.org/b/id/11147784-L.jpg",
      readed: true,
      readedAt: "2024-05-10T10:00:00Z",
      publisher: "Gallimard",
      publishedAt: "1943-04-06T00:00:00Z",
      createdAt: "2025-01-12T08:00:00Z",
      updatedAt: "2025-01-15T09:00:00Z",
    },
    {
      id: faker.string.uuid(),
      title: "Harry Potter e a Pedra Filosofal",
      author: "J.K. Rowling",
      summary: "O jovem Harry descobre que é um bruxo e entra no mundo mágico.",
      genre: "Fantasia",
      cover: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
      readed: false,
      readedAt: null,
      publisher: "Bloomsbury",
      publishedAt: "1997-06-26T00:00:00Z",
      createdAt: "2025-01-14T09:00:00Z",
      updatedAt: "2025-01-15T11:30:00Z",
    },
    {
      id: faker.string.uuid(),
      title: "A Revolução dos Bichos",
      author: "George Orwell",
      summary:
        "Animais se rebelam contra os humanos e criam sua própria sociedade.",
      genre: "Sátira",
      cover: "https://covers.openlibrary.org/b/id/10227365-L.jpg",
      readed: true,
      readedAt: "2023-03-10T14:00:00Z",
      publisher: "Secker & Warburg",
      publishedAt: "1945-08-17T00:00:00Z",
      createdAt: "2025-01-16T12:00:00Z",
      updatedAt: "2025-01-17T10:00:00Z",
    },
    {
      id: faker.string.uuid(),
      title: "Orgulho e Preconceito",
      author: "Jane Austen",
      summary:
        "Elizabeth Bennet e o Sr. Darcy enfrentam suas diferenças em nome do amor.",
      genre: "Romance",
      cover: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
      readed: false,
      readedAt: null,
      publisher: "T. Egerton",
      publishedAt: "1813-01-28T00:00:00Z",
      createdAt: "2025-01-18T09:00:00Z",
      updatedAt: "2025-01-18T10:30:00Z",
    },
    {
      id: faker.string.uuid(),
      title: "Crime e Castigo",
      author: "Fiódor Dostoiévski",
      summary:
        "Um estudante comete um assassinato e lida com a culpa e a punição.",
      genre: "Romance psicológico",
      cover: "https://covers.openlibrary.org/b/id/10958385-L.jpg",
      readed: true,
      readedAt: "2024-01-10T17:00:00Z",
      publisher: "The Russian Messenger",
      publishedAt: "1866-01-01T00:00:00Z",
      createdAt: "2025-01-20T14:00:00Z",
      updatedAt: "2025-01-22T09:00:00Z",
    },
    {
      id: faker.string.uuid(),
      title: "A Metamorfose",
      author: "Franz Kafka",
      summary: "Gregor Samsa acorda transformado em um inseto gigante.",
      genre: "Ficção existencialista",
      cover: "https://covers.openlibrary.org/b/id/7222241-L.jpg",
      readed: false,
      readedAt: null,
      publisher: "Kurt Wolff Verlag",
      publishedAt: "1915-10-01T00:00:00Z",
      createdAt: "2025-01-23T10:00:00Z",
      updatedAt: "2025-01-24T12:00:00Z",
    },
    {
      id: faker.string.uuid(),
      title: "O Alquimista",
      author: "Paulo Coelho",
      summary: "Santiago parte em busca de um tesouro e descobre seu destino.",
      genre: "Ficção filosófica",
      cover: "https://covers.openlibrary.org/b/id/8128696-L.jpg",
      readed: true,
      readedAt: "2022-09-10T11:30:00Z",
      publisher: "HarperCollins",
      publishedAt: "1988-01-01T00:00:00Z",
      createdAt: "2025-01-25T08:30:00Z",
      updatedAt: "2025-01-25T09:45:00Z",
    },
    {
      id: faker.string.uuid(),
      title: "Ensaio sobre a Cegueira",
      author: "José Saramago",
      summary:
        "Uma epidemia de cegueira atinge uma cidade, revelando o lado sombrio da humanidade.",
      genre: "Ficção distópica",
      cover: "https://covers.openlibrary.org/b/id/8905406-L.jpg",
      readed: true,
      readedAt: "2023-05-01T13:00:00Z",
      publisher: "Caminho",
      publishedAt: "1995-01-01T00:00:00Z",
      createdAt: "2025-01-26T10:00:00Z",
      updatedAt: "2025-01-26T11:00:00Z",
    },
    {
      id: faker.string.uuid(),
      title: "A Menina que Roubava Livros",
      author: "Markus Zusak",
      summary:
        "Durante a Segunda Guerra, uma menina encontra consolo nos livros.",
      genre: "Drama histórico",
      cover: "https://covers.openlibrary.org/b/id/8670991-L.jpg",
      readed: false,
      readedAt: null,
      publisher: "Picador",
      publishedAt: "2005-03-14T00:00:00Z",
      createdAt: "2025-01-27T14:00:00Z",
      updatedAt: "2025-01-28T10:30:00Z",
    },
  ];

  await prisma.book.createMany({
    data: books,
  });

  console.log("Seeded 100 books into the database.");
}

async function clearBooks() {
  await prisma.bookExchange.deleteMany({});
  await prisma.book.deleteMany({});
  console.log("Cleared all books from the database.");
}

// clearBooks()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
