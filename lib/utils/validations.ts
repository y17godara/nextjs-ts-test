import { z } from 'zod';

// user schema
export const userSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  username: z
    .string()
    .min(3, {
      message: 'Username must be at least 3 characters long',
    })
    .max(20, {
      message: 'Username must be less than 20 characters long',
    }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters long',
    })
    .max(100, {
      message: 'Password must be less than 100 characters long',
    }),
  image: z.string().url({
    message: 'Please enter a valid URL',
  }),
});

// email Subscription schema
export const newsLetterSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
});
