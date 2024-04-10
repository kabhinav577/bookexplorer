'use client';

import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type props = {
  label: string;
  href: string;
};

export const HeaderItem = ({ label, href }: props) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Button variant="ghost" className="justify-start h-[40px]" asChild>
      <Link
        href={href}
        className={cn(
          'text-base font-medium w-full',
          isActive && 'border-b-4 border-b-slate-500'
        )}
      >
        {label}
      </Link>
    </Button>
  );
};
