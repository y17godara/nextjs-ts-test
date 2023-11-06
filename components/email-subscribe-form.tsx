'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { handleNewsletterSubscription } from '@/actions/newsLetter/index';
import { Icons } from './icons';
import { newsLetterSchema } from '@/lib/utils/validations';

function EmailSubscribeForm() {
  const form = useForm<z.infer<typeof newsLetterSchema>>({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: {
      email: '',
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isButtonDisabled =
    form.formState.isSubmitting || !form.formState.isValid || isLoading;

  async function onSubmit(values: z.infer<typeof newsLetterSchema>) {
    setIsLoading(true); // Set loading state to true when submitting
    // console.log(values);
    try {
      const response = await handleNewsletterSubscription(
        values.email.toString()
      );
      if (
        (response.status as number) >= 200 &&
        (response.status as number) < 300
      ) {
        toast({
          variant: 'default',
          title: 'Success!',
          description: `You are now subscribed to our newsletter.`,
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong',
          description: `Code: ${response.status}, Please try again or contact support for help.`,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong',
        description: 'Code 505, Please try again or contact support for help.',
      });
    } finally {
      form.reset(); // clear form after submission
      setIsLoading(false); // Set loading state to false after form submission
    }
  }
  return (
    <>
      {/* email form with submit button usign shadcn ui */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='my-2 flex flex-row items-center space-x-2  '
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <div className='flex flex-col items-center justify-center gap-4 md:gap-6'>
                  <FormControl>
                    <Input
                      className='flex border-2 border-gray-400 text-center focus:border-gray-200'
                      placeholder='joe@mail.com'
                      {...field}
                    />
                  </FormControl>
                  <Button
                    aria-labelledby='button'
                    disabled={isButtonDisabled}
                    type='submit'
                  >
                    {isLoading ? (
                      <div className='flex flex-row items-center gap-2'>
                        Subscribing
                        <Icons.spinner className='h-4 w-4 animate-spin' />
                      </div>
                    ) : (
                      <div className='flex flex-row items-center gap-2'>
                        Subscribe
                        <Icons.sumbit className='h-4 w-4' />
                      </div>
                    )}
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}

export default EmailSubscribeForm;
