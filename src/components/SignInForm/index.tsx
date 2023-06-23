'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
// import { signIn } from 'next-auth/react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema } from './SignIn.schema';
import type { SignInFormData } from './SignInForm.types';
import { signUp } from '@/clients';

export const SignInForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignInFormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<SignInFormData> = async ({
    email,
    password,
  }) => {
    // const res = await signIn('credentials', {
    //   email,
    //   password,
    //   redirect: false,
    // });

    const res = await signUp({ email, password });

    if (res) {
      router.push('/profile');
    } else {
      // console.log(res.error);
    }
  };

  console.log(isValid);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='email' {...register('email')} />
      <input type='password' {...register('password')} />
      <button type='submit'>Sign In</button>
    </form>
  );
};
