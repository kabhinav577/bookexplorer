/* eslint-disable @next/next/no-img-element */
import { Book } from '@/types/api';
import { Users, PersonStandingIcon } from 'lucide-react';

type BookDetailProps = {
  label: string;
  data: string;
};

const BookDetail = ({ label, data }: BookDetailProps) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h4 className="text-slate-600 text-base tracking-wide font-semibold uppercase">
        {label}
      </h4>
      <p className="text-slate-500 font-medium">{data}</p>
    </div>
  );
};

type BookDetailsProps = {
  book: Book;
};

export const BookDetails = ({ book }: BookDetailsProps) => {
  return (
    <div className="w-full flex flex-col gap-y-12 justify-center items-center lg:flex-row lg:justify-around lg:h-[calc(100vh-60px)] py-10">
      <div className="w-[300px]  flex items-center justify-center shadow-2xl">
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
        {/* BOOK TITLE AND SUBTITLE  */}
        <div>
          <h2 className="text-2xl text-slate-700 font-semibold">
            {book.volumeInfo.title}
          </h2>
          <h3 className="text-lg font-semibold text-slate-700">
            {book.volumeInfo.subtitle}
          </h3>
        </div>
        {/* AUTHOR DETAILS  */}
        <div className="flex justify-center items-center">
          <Users className="w-6 h-6 text-slate-600 mr-4" />
          <span className="text-slate-600 underline">
            {book.volumeInfo.authors.join(', ')}
          </span>
        </div>
        {/* DESCRIPTION  */}
        <div>
          <p className="text-sm text-slate-500">
            {book.volumeInfo.description.slice(0, 300)}...
          </p>
        </div>

        {/* BOOK PUBLISHER ISBN PAGES */}
        <div className="flex flex-col gap-y-2 w-[300px]">
          <BookDetail
            label="ISBN"
            data={
              book.volumeInfo.industryIdentifiers[0].identifier +
              ', ' +
              book.volumeInfo.industryIdentifiers[1].identifier
            }
          />
          <BookDetail label="Publisher" data={book.volumeInfo.publisher} />
          <BookDetail
            label="First Publish"
            data={book.volumeInfo.publishedDate}
          />
          <BookDetail label="Language" data="English" />
          <BookDetail
            label="pages"
            data={book.volumeInfo.pageCount.toString()}
          />
        </div>
      </div>
    </div>
  );
};
