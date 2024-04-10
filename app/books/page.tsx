import { BookItem } from '@/components/books/book-item';
import { Layout } from '@/components/layout';
import { fetchBooks } from '../action';
import { Book } from '@/types/api';

const BooksPage = async () => {
  const data = await fetchBooks();

  return (
    <Layout>
      <div className="pt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 w-full pb-12">
        {data.map((book: Book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </Layout>
  );
};

export default BooksPage;
