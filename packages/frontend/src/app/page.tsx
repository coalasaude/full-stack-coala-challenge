import { BookList } from "@/components/organisms/book-list";
import { PageHeader } from "@/components/organisms/page-header";
import { BookProvider } from "@/context/book/provider";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto pt-6 pb-2 px-4 md:px-6 my-6">
      <BookProvider>
        <PageHeader />
        <BookList />
      </BookProvider>
    </main>
  );
}
