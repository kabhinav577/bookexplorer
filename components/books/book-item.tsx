/* eslint-disable @next/next/no-img-element */
'use client';

import { Book } from '@/types/api';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {
  book: Book;
};

export const BookItem = ({ book }: Props) => {
  return (
    <Card className="bg-gradient-to-tr from-orange-100 to-amber-50 flex justify-between flex-col">
      <CardContent className="p-0">
        <div className="flex w-full justify-between">
          <div className="w-[130px] h-[160px]">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
              width={130}
              height={130}
              className="object-cover w-full h-full rounded-tl-md"
            />
          </div>

          {/* Published date and page count */}
          <div className="flex flex-col justify-between pt-4 px-2 text-slate-600">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <strong>Pages:</strong> {book.volumeInfo.pageCount}
              </div>
              <div className="flex justify-between">
                <strong>Language:</strong> {book.volumeInfo.language}
              </div>
            </div>
            <div>
              <strong>Published:</strong>{' '}
              <span> {book.volumeInfo.publishedDate?.slice(0, 4)}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardHeader className="p-3 mt-4">
        <CardTitle className="text-slate-700">
          {book.volumeInfo.title}
        </CardTitle>
        <CardDescription>{book.volumeInfo.authors.join(', ')}</CardDescription>
      </CardHeader>

      <CardContent className="p-3">
        <div className="flex w-full justify-between">
          <div className="flex justify-center items-center">
            {book.saleInfo.retailPrice?.amount ? (
              <p className="text-sky-600 font-medium">
                {book.saleInfo.retailPrice.currencyCode}{' '}
                {book.saleInfo.retailPrice.amount}
              </p>
            ) : (
              <p className="text-rose-400 font-medium">Not for sale</p>
            )}
          </div>
          <Button>
            <Link href={`/books/${book.id}`}>View More</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
