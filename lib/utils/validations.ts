import { z } from 'zod';

interface userSchema {
  email: string;
  username: string;
  image: string;
  password: string;
  confirmPassword: string;
}

// user schema
export const userSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({
      message: 'Invalid Email',
    }),
  username: z
    .string()
    .min(3, {
      message: 'Username must be at least 3 characters',
    })
    .max(50, {
      message: 'Username must be less than 50 characters',
    }),
  image: z.string().url({
    message: 'Please enter a valid URL',
  }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters',
    })
    .max(50, {
      message: 'Password must be less than 50 characters',
    }),
});

// email Subscription schema
export const newsLetterSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
});
