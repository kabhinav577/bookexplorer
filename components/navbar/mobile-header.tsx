import React from 'react';
import { MobileSidebar } from './mobile-sidebar';
import { Button } from '../ui/button';

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-8 h-[60px] flex items-center justify-between fixed top-0 w-full z-50">
      <MobileSidebar />
      <div className="flex items-center gap-x-3">
        <Button variant="ghost">Sign in</Button>
        <Button variant="default">Get Started</Button>
      </div>
    </nav>
  );
};
