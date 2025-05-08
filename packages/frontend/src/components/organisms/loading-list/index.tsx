import { BookSkeleton } from "@/components/molecules/book-skeleton";

const LoadingList = () => {
  return (
    <section className="space-y-6">
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <BookSkeleton key={index} />
          ))}
      </article>
    </section>
  );
};

export { LoadingList };
