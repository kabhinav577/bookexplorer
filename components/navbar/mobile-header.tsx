import React from 'react';
import { MobileSidebar } from './mobile-sidebar';
import { Button } from '../ui/button';
import Link from 'next/link';

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-8 h-[60px] flex items-center justify-between fixed top-0 w-full z-50 bg-slate-100 border-b-2">
      <MobileSidebar />
      <div className="flex items-center gap-x-3">
        <Button variant="ghost">Sign in</Button>
        <Button variant="default">
          <Link href="/books">Get Started</Link>
        </Button>
      </div>
    </nav>
  );
};
