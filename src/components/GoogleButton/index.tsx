'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  return (
    <button onClick={() => void signIn('google', { callbackUrl })}>
      Sign in with Google
    </button>
  );
};
