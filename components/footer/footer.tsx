import { Architects_Daughter } from 'next/font/google';
import { InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';

const architectsDaughter = Architects_Daughter({
  subsets: ['latin'],
  weight: '400',
});

export const Footer = () => {
  return (
    <div className="lg:px-20 w-full mt-12 h-full bg-[#2b2a28] lg:h-[300px] py-8 flex flex-col justify-center items-center gap-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10  w-full">
        <div className="flex justify-end lg:justify-start items-center text-2xl lg:text-4xl text-slate-200 text-left">
          <h2 className={architectsDaughter.className}>Book-Explorer</h2>
          {/* <sup className="text-slate-500 text-xs">TM</sup> */}
        </div>
        <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-y-2">
          <h3 className="text-slate-300 font-semibold uppercase">Company</h3>
          <div className="flex flex-col items-start justify-between text-slate-500">
            <Link href="/about">
              <p>About</p>
            </Link>
            <Link href="/books">
              <p>Press</p>
            </Link>
            <Link href="/books">
              <p>Customer</p>
            </Link>
            <Link href="/books">
              <p>Blog</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-y-2">
          <h3 className="text-slate-300 font-semibold uppercase">Support</h3>
          <div className="flex flex-col items-start justify-between text-slate-500">
            <Link href="/books">
              <p>Contact Us</p>
            </Link>
            <Link href="/books">
              <p>Knowledge base</p>
            </Link>
            <Link href="/books">
              <p>Privacy Policy</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-y-2">
          <h3 className="text-slate-300 font-semibold uppercase">
            Connect with us
          </h3>
          <div className="flex items-center justify-start gap-x-4">
            <Link href="/books">
              <InstagramIcon className="w-6 h-6 text-slate-400 hover:text-slate-300" />
            </Link>
            <Link href="/books">
              <FacebookIcon className="w-6 h-6 text-slate-400 hover:text-slate-300" />
            </Link>
            <Link href="/books">
              <TwitterIcon className="w-6 h-6 text-slate-400 hover:text-slate-300" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-full h-[1px] shadow-lg" />
      <div className="w-full flex justify-center lg:justify-start items-center">
        <p className="text-slate-500 text-center">
          © 2024 Book-Explorer. All rights reserved
        </p>
      </div>
    </div>
  );
};
