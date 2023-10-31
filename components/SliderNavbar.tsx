'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

const SHEET_SIDES = ['left'] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

function SliderNavbar() {
  return (
    <div className='flex flex-row items-center justify-center gap-2 p-1'>
      <Link
        aria-label='Github Profile'
        href={'#'}
        className='z-10 flex border border-input bg-transparent text-end shadow-sm hover:bg-accent hover:text-accent-foreground'
      >
        <Icons.gitHub className='h-6 w-6' />
      </Link>

      <Sheet key={'left'}>
        <SheetTrigger asChild>
          <Button className='z-10 flex' variant='outline'>
            <Icons.menu className='h-6 w-6' />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle>yashgodar.me</SheetTitle>
            <SheetDescription>
              Make changes to your profile here.
            </SheetDescription>
          </SheetHeader>
          {/* <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name' className='text-right'>
                  Name
                </Label>
                <Input id='name' value='Pedro Duarte' className='col-span-3' />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='username' className='text-right'>
                  Username
                </Label>
                <Input id='username' value='@peduarte' className='col-span-3' />
              </div>
            </div> */}
          <div className='grid items-center justify-center gap-2 py-6 text-center'>
            Example content
          </div>
          <SheetFooter>
            {/* <SheetClose asChild>
                <Button type='submit'>Save changes</Button>
              </SheetClose> */}
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
