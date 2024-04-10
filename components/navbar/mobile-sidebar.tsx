import { Menu } from 'lucide-react';
import { HeaderItem } from './header-item';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Architects_Daughter } from 'next/font/google';

const architectsDaughter = Architects_Daughter({
  subsets: ['latin'],
  weight: '400',
});

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className=" text-slate-800" />
      </SheetTrigger>
      <SheetContent className="px-4 z-[100]" side="left">
        <div className="flex flex-col gap-y-4 my-4">
          <Link href="/books">
            <div className="flex items-center ml-2">
              <h1
                className={cn(
                  'text-xl font-bold text-slate-800 tracking-wide',
                  architectsDaughter.className
                )}
              >
                Book Explorer
              </h1>
            </div>
          </Link>
          <HeaderItem label="Home" href="/" />
          <HeaderItem label="Store" href="/store" />
          <HeaderItem label="Community" href="/community" />
          <HeaderItem label="About Us" href="/about" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
