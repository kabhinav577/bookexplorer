import { BookItem } from '@/components/books/book-item';
import { Layout } from '@/components/layout';
import { fetchBooks } from '../action';
import { Book } from '@/types/api';

const BooksPage = async () => {
  const data = await fetchBooks();

  return (
    <Layout>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {data.map((book: Book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </Layout>
  );
};

export default BooksPage;
