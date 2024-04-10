import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="mt-[70px] px-8 lg:px-20 w-full h-full">{children}</div>
  );
};
