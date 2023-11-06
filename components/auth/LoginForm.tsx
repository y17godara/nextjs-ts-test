'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/icons';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import GoogleSignInButton from '../GoogleSignInButton';
import { toast } from '../ui/use-toast';
import { signIn } from 'next-auth/react';

const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
});

const LogInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isButtonDisabled =
    form.formState.isSubmitting || !form.formState.isValid || isLoading;

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true); // Set loading state to true when submitting
    try {
      const signInData = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      console.log('FormData: ', { signInData });
      if (signInData?.error) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong',
          description: `Code: ${signInData.status}, Please try again or contact support for help.`,
        });
      } else {
        toast({
          variant: 'default',
          title: 'Success!',
          description: `You have successfully logged in!`,
        });
        router.push('/user/profile');
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong',
        description: 'Code 505, Please try again or contact support for help.',
      });
    } finally {
      form.reset(); // clear form after submission
      setIsLoading(false); // Set loading state to false after form submission
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='space-y-2'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='mail@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Enter your password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className='mt-6 w-full'
          type='submit'
          aria-label='Login'
          disabled={isButtonDisabled}
        >
          {isLoading ? (
            <div className='flex flex-row items-center gap-2'>
              Please Wait
              <Icons.spinner className='h-4 w-4 animate-spin' />
            </div>
          ) : (
            <div className='flex flex-row items-center gap-2'>
              Login
              <Icons.sumbit className='h-4 w-4' />
            </div>
          )}
        </Button>
      </form>
      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        or
      </div>
      <GoogleSignInButton>Sign in with Google</GoogleSignInButton>
      <p className='mt-2 text-center text-sm text-gray-600'>
        If you don&apos;t have an account, please&nbsp;
        <Link className='text-blue-500 hover:underline' href='/auth/register'>
          Register
        </Link>
      </p>
    </Form>
  );
};

export default LogInForm;
