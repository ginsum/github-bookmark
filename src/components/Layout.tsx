import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col container mx-auto w-full md:w-[680px] px-6 pb-8 h-full">
      {children}
    </div>
  );
};

export default Layout;
