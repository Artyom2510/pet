'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

import React from 'react';

export const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <>
      {navLinks.map(link => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? 'active' : ''}
          >
            {link.label}
          </Link>
        );
      })}
      {session?.data ? (
        <>
          <Link href='/profile'>Profile</Link>
          <Link href='#' onClick={() => signOut({ callbackUrl: '/' })}>
            SignOut
          </Link>
        </>
      ) : (
        <Link href='/sign-in'>SignIn</Link>
      )}
    </>
  );
};
