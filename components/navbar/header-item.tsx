'use client';

import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import Link from 'next/link';

type props = {
  label: string;
  href: string;
};

export const HeaderItem = ({ label, href }: props) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Button
      variant={isActive ? 'outline' : 'ghost'}
      className="justify-start h-[40px]"
      asChild
    >
      <Link href={href} className="text-base font-medium">
        {label}
      </Link>
    </Button>
  );
};
