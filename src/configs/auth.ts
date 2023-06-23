import type { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { USERS } from '@/db/users';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import type { Adapter } from 'next-auth/adapters';

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // Credentials({
    //   credentials: {
    //     email: { label: 'Email', type: 'email' },
    //     password: { label: 'Password', type: 'password' },
    //   },

    //   // eslint-disable-next-line @typescript-eslint/require-await
    //   async authorize(credentials) {
    //     const { email, password } = credentials || {};
    //     if (!email || !password) {
    //       return null;
    //     }

    //     const currentUser = USERS.find(user => user.email === email);

    //     if (currentUser?.password === password) {
    //       const { password, ...restUserData } = currentUser;

    //       return restUserData;
    //     }

    //     return null;
    //   },
    // }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    secret: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  }) as Adapter,
  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
  },
};
