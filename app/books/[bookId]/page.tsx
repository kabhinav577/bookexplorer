import { fetchBooks } from '@/app/action';
import { BookDetails } from '@/components/books/book-details';
import { Layout } from '@/components/layout';
import { Book } from '@/types/api';
import React from 'react';

type Props = {
  params: {
    bookId: number;
  };
};

const BookIdPage = async ({ params }: Props) => {
  const data = await fetchBooks();

  // Adding + to convert string to number
  const book = data.find((book: Book) => book.id === +params.bookId);

  return (
    <Layout>
      <BookDetails book={book} />
    </Layout>
  );
};

export default BookIdPage;
