import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="mt-[60px] px-8 lg:px-20 w-full h-full bg-gradient-to-br from-green-300 to-yellow-200">
      {children}
    </div>
  );
};
