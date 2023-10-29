'use client';

import React from 'react';
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
import { toast } from './ui/use-toast';
// import { ToastAction } from '@/components/ui/toast';

interface formSchema {
  email: string;
}

const formSchema = z.object({
  email: z.string().email(),
});

function EmailSubscribeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const clearUserInput = () => {
    form.reset();
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    toast({
      variant: 'default',
      title: 'Successfully subscribed!',
      description: 'You will be notified when we launch.',
      action: <></>,
    });
  }
  return (
    <>
      {/* fullname and email form with submit button usign shadcn ui */}
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
                  <Button type='submit'>Submit</Button>
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
