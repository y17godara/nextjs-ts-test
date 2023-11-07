'use client';
import React from 'react';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

const LogOutButton = () => {
  return (
    <Button
      variant={'destructive'}
      onClick={() => signOut({ callbackUrl: '/auth/login' })}
    >
      Log Out
    </Button>
  );
};

export default LogOutButton;
