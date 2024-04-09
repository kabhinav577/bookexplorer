import Image from 'next/image';
import React from 'react';
import { Input } from '../ui/input';
import { Shadows_Into_Light, Architects_Daughter } from 'next/font/google';
import { cn } from '@/lib/utils';

const shadowsIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: '400',
});

const architectsDaughter = Architects_Daughter({
  subsets: ['latin'],
  weight: '400',
});

export const Hero = () => {
  return (
    <main className="pt-[50px] w-full h-full flex flex-col lg:flex-row-reverse items-center justify-between my-12 gap-y-8 lg:px-20">
      <div className="flex w-full lg:w-[50%] items-center justify-center">
        <Image src="/books.svg" width={450} height={450} alt="Hero" />
      </div>
      <div className="lg:w-[50%] w-full flex flex-col gap-y-4 px-8  items-start justify-center">
        <h3 className="text-base font-medium text-slate-700">
          ⭐️ Start your reading journey today
        </h3>
        <h1
          className={cn(
            'text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-wide',
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
        <div className="w-[50%]">
          <Input className="rounded-2xl" placeholder="Search books" />
        </div>
      </div>
    </main>
  );
};
