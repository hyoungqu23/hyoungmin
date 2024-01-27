import React from 'react';
import { NAVIGATION_ITEMS } from '@/src/assets/constants';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky z-50 top-0 flex items-center justify-center w-screen h-16 bg-secondary-900/50 backdrop-blur-sm bg-clip-padding backdrop-filter'>
      <nav className='flex gap-8'>
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={item.route}
            className='block px-6 py-4 font-semibold tracking-wider text-white transition-all duration-500 text-heading6 hover:text-primary-500 active:scale-95'
          >
            {item.id.toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
