'use client';

import React from 'react';
import { Navigation } from '../Navigation';

const navItems = [{ label: 'Home', href: '/' }];

export const Header = () => {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
};
