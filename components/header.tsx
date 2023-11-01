import React from 'react';
import { ModeToggle } from './mode-toggle';
import { Terminal } from 'lucide-react';
import { Icons } from './icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Header() {
  return (
    <>
      <div className='sticky top-0 z-50 w-full border-b bg-background/95 dark:backdrop-blur dark:supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-14 items-center justify-between'>
          <div className='flex flex-row items-center gap-2'>
            <Terminal className='h-9 w-9' />
            <h2 className='h-6 font-bold'>LOGO</h2>
          </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
