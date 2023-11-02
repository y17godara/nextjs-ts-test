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

function SliderNavbar() {
  return (
    <div className='flex flex-row items-center justify-center gap-2 p-1'>
      <Sheet key={'left'}>
        <SheetTrigger asChild>
          <Button
            aria-labelledby='button'
            className='z-10 bg-black/10 dark:bg-black/40 dark:text-gray-300'
            variant='default'
          >
            <MagneticIcon>
              <Icons.menu variant='hover:text-[#ecac50]' className='h-6 w-2' />
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
              <Button aria-labelledby='button' variant='default'>
                Cancel
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SliderNavbar;
