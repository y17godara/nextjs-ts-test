import React from 'react';
import { ModeToggle } from './mode-toggle';
import { Terminal } from 'lucide-react';
import { Icons } from './icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Header() {
  return (
    <>
      <div className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex items-center justify-between h-14'>
          <div className='flex flex-row items-center gap-2'>
            <Terminal className='w-9 h-9' />
            <h2 className='h-6 font-bold'>LOGO</h2>
          </div>
          <div className='flex flex-row items-center gap-6'>
          <Link 
          href={"https://x.com/y17godara"} 
          className={cn('w-0 px-0')}
          target='_blank'
          >
            <Icons.twitter className='w-3 h-3 fill-current' />
            <span className='sr-only'>Twitter</span>
          </Link>
          <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
}