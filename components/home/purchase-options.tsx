import React from 'react';
import { Button } from '../ui/button';
import { ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';

export const PurchaseOptions = () => {
  return (
    <div className="lg:px-20 w-full my-12 h-full lg:h-[400px] py-8 flex flex-col justify-center items-center gap-y-4">
      <div>
        <h2 className="text-2xl lg:text-3xl text-slate-700 font-semibold">
          Are you ready TO SUCCESS?
        </h2>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <h4 className="text-orange-300 font-medium">
          Get the book now and bonus content from Bookexplorer
        </h4>
        <p
          className="text-slate-400 uppercase text-sm
        "
        >
          5% discount for digital copy purchase at Google Play
        </p>
      </div>
      <div className="flex w-[80%] flex-row justify-center gap-x-4 -mt-8 items-center">
        <div>
          <Button className="bg-orange-400 hover:bg-orange-500 p-6 lg:p-7">
            <ShoppingCartIcon className="w-5 h-5 mr-2" />
            Order the book!
          </Button>
        </div>
        <div className="">
          <Image
            src="/playstore.svg"
            alt="playstore"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
