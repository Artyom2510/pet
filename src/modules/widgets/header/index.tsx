import React from 'react';
import { Logo } from './ui/Logo';
import { Menu } from './ui/Menu';

export const Header = () => {
  return (
    <header className='lg:px-8" mx-auto flex max-w-7xl items-center justify-between p-6'>
      <nav>
        <Logo />
        <Menu />
      </nav>
    </header>
  );
};
