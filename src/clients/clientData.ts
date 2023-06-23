import type { AuthResponse, User, AuthError } from '@supabase/supabase-js';

export const clientData = ({ data, error }: AuthResponse): User => {
  if (error) {
    throw new Error(error.message);
  }

  const { user } = data;
  if (!user) {
    throw new Error('user not found');
  }

  return user;
};
