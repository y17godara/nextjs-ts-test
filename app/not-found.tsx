import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
  description:
    'Uh oh! This page does not exists, maybe you clicked an old link or misspelled. Please try again…',
};

const Custom404 = (): JSX.Element => (
  <div className='flex flex-col gap-2'>
    <h1>404 - Page not found</h1>
    <p>
      Uh oh! This page does not exists, maybe you clicked an old link or
      misspelled. Please try again…
    </p>
    <div className='h-2' />
    <Link aria-label='Home' href='/'>
      Return home
    </Link>
  </div>
);

export default Custom404;
