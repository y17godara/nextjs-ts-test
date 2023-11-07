'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { Icons } from '@/components/icons';

const FormSchema = z
  .object({
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters')
      .max(50, 'Username must be less than 50 characters'),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    image: z.string().url('Image must be a valid URL'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(50, 'Password must be less than 50 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

const RegisterForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      image: '',
      password: '',
      confirmPassword: '',
    },
  });

  const isButtonDisabled =
    form.formState.isSubmitting || !form.formState.isValid || isLoading;

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true); // Set loading state to true when submitting
    try {
      const user = {
        username: data.username,
        email: data.email,
        image: data.image,
        password: data.password,
      };

      // Make a POST request to API endpoint
      const response = await axios.post(
        `/api/user`,
        user,
        {
          headers: {
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        toast({
          variant: 'default',
          title: 'Success!',
          description: `You have successfully created an account`,
        });
        router.refresh();
        router.push(`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`);
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong',
          description: `Code: ${response.status}, Please try again or contact support for help.`,
        });
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
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='johndoe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            name='image'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Picture</FormLabel>
                <FormControl>
                  <Input
                    placeholder='https://example.com/image.png'
                    {...field}
                  />
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
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-Enter your password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Re-Enter your password'
                    type='password'
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
          aria-label='Register'
          disabled={isButtonDisabled}
        >
          {isLoading ? (
            <div className='flex flex-row items-center gap-2'>
              Please Wait
              <Icons.spinner className='h-4 w-4 animate-spin' />
            </div>
          ) : (
            <div className='flex flex-row items-center gap-2'>
              Register Now!
              <Icons.sumbit className='h-4 w-4' />
            </div>
          )}
        </Button>
      </form>
      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        or
      </div>
      <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
      <p className='mt-2 text-center text-sm text-gray-600'>
        If you already have an account, please&nbsp;
        <Link className='text-blue-500 hover:underline' href='/auth/login'>
          Login
        </Link>
      </p>
    </Form>
  );
};

export default RegisterForm;
