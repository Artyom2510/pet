import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z.string().min(4),
});
