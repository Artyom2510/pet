import type { z } from 'zod';
import type { SignInSchema } from './SignIn.schema';

export type SignInFormData = z.infer<typeof SignInSchema>;
