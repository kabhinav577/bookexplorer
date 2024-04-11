'use client';

import Image from 'next/image';
import React from 'react';
import { Input } from '../ui/input';
import { Architects_Daughter } from 'next/font/google';
import { cn } from '@/lib/utils';

const architectsDaughter = Architects_Daughter({
  subsets: ['latin'],
  weight: '400',
});

type Props = {
  books: any[];
};

export const Hero = ({ books }: Props) => {
  return (
    <main className="pt-[70px] w-full h-full flex flex-col lg:flex-row-reverse items-center justify-between mt-12 gap-y-8 lg:px-20 pb-10">
      <div className="flex w-full lg:w-[50%] items-center justify-center">
        <Image
          src="/books.svg"
          width={350}
          height={350}
          alt="Hero"
          className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]"
        />
      </div>
      <div className="lg:w-[50%] w-full flex flex-col gap-y-4 px-8 lg:px-0  items-start justify-center">
        <h3 className="text-base font-medium text-slate-700">
          ⭐️ Start your reading journey today
        </h3>
        <h1
          className={cn(
            'text-4xl font-extrabold text-slate-800 tracking-wide',
            architectsDaughter.className
          )}
        >
          Where every page is a new Adventure.
        </h1>
        <p className="text-sm font-normal text-slate-700 text-justify">
          From classics to contemporary, our bookstore offers a wide selection
          of books to suit every taste and interest. Start exploring our shelves
          today and uncover your next literary gem.
        </p>
        <div className="w-[70%] lg:w-[50%]">
          <Input className="rounded-2xl" placeholder="Search books" />
        </div>
      </div>
    </main>
  );
};
