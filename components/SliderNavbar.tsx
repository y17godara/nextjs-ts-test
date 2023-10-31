'use client';

import MagneticIcon from '@/components/frameMotion/MagneticIcon';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Icons } from './icons';
import Link from 'next/link';

function SliderNavbar() {
  return (
    <div className='flex flex-row items-center justify-center gap-2 p-1'>
      <Link
        aria-label='Github Profile'
        href={'#'}
        className='z-10 flex border border-input bg-transparent text-end shadow-sm hover:bg-accent hover:text-accent-foreground'
      >
        <MagneticIcon>
          <Icons.gitHub className='h-6 w-6' />
        </MagneticIcon>
      </Link>

      <Sheet key={'left'}>
        <SheetTrigger asChild>
          <Button className='z-10 flex' variant='outline'>
            <MagneticIcon>
              <Icons.menu className='h-6 w-6' />
            </MagneticIcon>
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle>yashgodar.me</SheetTitle>
            <SheetDescription>
              Make changes to your profile here.
            </SheetDescription>
          </SheetHeader>
          <div className='grid items-center justify-center gap-2 py-6 text-center'>
            Example content
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant='default'>Cancel</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SliderNavbar;
