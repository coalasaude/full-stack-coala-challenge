import { BookList } from "@/components/organisms/book-list";
import { PageHeader } from "@/components/organisms/page-header";

export default function Home() {
  return (
    <main className="container mx-auto py-6 px-4 md:px-6">
      <PageHeader />
      <BookList />
    </main>
  );
}
