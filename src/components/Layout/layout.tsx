import React, { ReactNode, useEffect } from 'react';
import { Metadata } from 'next';
import { useRouter } from 'next/router';
import Footer from '../Footer';
import { useUIStore } from '@/store';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { useSidebar } from '@/store/useSidebar';

interface LayoutProps {
  children: ReactNode;
}



const Layout: React.FC<LayoutProps> = ({ children }) => {

  const theme = useUIStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const { pathname } = useRouter();

  const { isOpen } = useSidebar();


  // No Layout
  const noLayoutPaths = ['/404'];

  if (noLayoutPaths.some((path) => pathname.startsWith(path))) {
    return (
      <main className='bg-white dark:bg-[#000000] text-gray-900 dark:text-white transition-colors duration-300 relative '>
        {children}
      </main>
    );

  }

return (
  <main className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 relative min-h-screen">
    <div className="hidden md:flex min-h-screen">
      <Sidebar />

      <div
        className={`flex flex-1 flex-col items-center transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-20"
        }`}
      >
        <div className="flex-1 w-full overflow-y-auto">
          <Navbar />
          {children}
        </div>

      </div>
    </div>


    <div className="flex flex-col items-center justify-center p-6 text-center md:hidden min-h-screen">
      <h1 className="text-xl font-bold">Desktop Required</h1>
      <p className="text-gray-500 mt-2">
        The mobile optimized dashboard is currently under development.  
        Please sign in using a desktop.
      </p>
    </div>
  </main>
);

};

export default Layout;
