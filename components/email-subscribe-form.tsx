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
import { ToastAction } from '@/components/ui/toast';

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

  // const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      description: 'There was a problem with your request.',
      action: (
        <ToastAction
          onClick={() => {
            console.log('Try Again');
          }}
          altText='Try again'
        >
          Try again
        </ToastAction>
      ),
    });
  }
  return (
    <>
      {/* fullname and email form with submit button usign shadcn ui */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='my-4 flex flex-row items-center space-x-2  '
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <div className='flex flex-row items-center justify-center gap-4 md:gap-8'>
                  <FormControl>
                    <Input placeholder='joe@mail.com' {...field} />
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
