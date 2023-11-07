'use client';
import React, { MouseEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const LogOutButton = () => {
    const router = useRouter();

    const handelLogin: MouseEventHandler<HTMLButtonElement> = (event) => {
        console.log('LogOutButton: handelLogin: event: ', event);
        router.refresh();
        router.push('/auth/login');
    }
  return (
    <Button
      variant={'default'}
      onClick={handelLogin}
    >
      LogIn
    </Button>
  );
};

export default LogOutButton;
