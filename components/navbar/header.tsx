import { cn } from '@/lib/utils';
import Link from 'next/link';
import { HeaderItem } from './header-item';
import { Button } from '../ui/button';
import { MobileHeader } from './mobile-header';
import { Architects_Daughter } from 'next/font/google';

const architectsDaughter = Architects_Daughter({
  subsets: ['latin'],
  weight: '400',
});

type Props = {
  className?: string;
};

export const Header = ({ className }: Props) => {
  return (
    <>
      <header className="hidden lg:block">
        <div
          className={cn(
            'h-[60px] lg:w-full flex lg:fixed top-0 px-8 items-center justify-between bg-slate-100 border-b-2',
            className
          )}
        >
          <Link href="/books">
            <div className="flex items-center gap-x-3">
              <h1
                className={cn(
                  'text-xl font-bold text-slate-800 tracking-wide',
                  architectsDaughter.className
                )}
              >
                Book-Explorer
              </h1>
            </div>
          </Link>

          <div className="flex items-center gap-x-3">
            <HeaderItem label="Home" href="/" />
            <HeaderItem label="Store" href="/store" />
            <HeaderItem label="Community" href="/community" />
            <HeaderItem label="About Us" href="/about" />
          </div>
          <div className="flex items-center gap-x-3">
            <Button variant="ghost">Sign in</Button>
            <Button variant="default">
              <Link href="/books">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <MobileHeader />
    </>
  );
};
