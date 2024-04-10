'use client';

import { Book } from '@/types/api';

type Props = {
  book: Book;
};

export const BookItem = ({ book }: Props) => {
  return <div>{book.volumeInfo.title}</div>;
};
