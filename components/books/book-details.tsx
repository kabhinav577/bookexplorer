/* eslint-disable @next/next/no-img-element */
import { Book } from '@/types/api';
import React from 'react';

type Props = {
  book: Book;
};

export const BookDetails = ({ book }: Props) => {
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center lg:flex-row lg:justify-around h-[calc(100vh-60px)]">
      <div className="w-[300px] flex items-center justify-center shadow-2xl">
        <img
          src={
            book.volumeInfo.imageLinks.thumbnail
              ? book.volumeInfo.imageLinks.thumbnail
              : '/book-placeholder.png'
          }
          alt="Thumbnail"
          width={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:w-[50%] flex flex-col gap-y-3 justify-center items-start">
        <h2 className="text-2xl text-slate-600 font-semibold">
          {book.volumeInfo.title}
        </h2>
        <div>
          <span className="text-slate-500">
            {book.volumeInfo.authors.join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
};
