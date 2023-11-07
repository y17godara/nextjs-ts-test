import React from 'react';
import { ModeToggle } from './mode-toggle';
import { Terminal } from 'lucide-react';
import { Icons } from './icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { poppins } from '@/lib/utils/font';
import AuthButton from './auth-button';

export default function Header() {
  return (
    <>
      <div className={
        cn(
          'sticky top-0 z-50 w-full border-b bg-background/95 dark:backdrop-blur dark:supports-[backdrop-filter]:bg-background/60',
          poppins.variable,
        )
      }>
        <div className='container flex h-14 items-center justify-between'>
          <Link href="/" className='flex flex-row items-center gap-2'>
            <Terminal className='h-9 w-9' />
          </Link>
          <div className='flex flex-row items-center gap-12'>
            <Link
              aria-label='Github'
              href={'https://github.com/y17godara'}
              className={cn('w-0 px-0')}
              target='_blank'
            >
              <Icons.gitHub className='h-3 w-3 fill-current' />
              <span className='sr-only'>Github</span>
            </Link>
            <ModeToggle />
            <div>
            <AuthButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
