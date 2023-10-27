import React from 'react';
import type { Metadata } from 'next';
import bgImage from '/public/static/cs-bg-2.jpg';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Coming Soon',
};

function ComingSoon() {
  return (
    <section className='relative min-h-screen w-full'>
      {/* Image: for background image */}
      <Image
        src={bgImage}
        alt='Coming Soon Background Image'
        layout='fill'
        objectFit='cover'
        quality={100}
        priority={true}
        placeholder='blur'
        className='z-[-1] border-b bg-background/95 opacity-95 backdrop-blur supports-[backdrop-filter]:bg-background/95'
      />

      {/* div: to give 50% black shade on bg image */}
      <div className='absolute left-0 top-0 flex h-full w-full bg-black opacity-50'></div>
  
        {/* Content */}
      <div className='w-9/12 p-4 flex justify-center items-center text-center mx-auto rounded-lg bg-black/40 backdrop-blur-2xl'>
        <div className='relative text-white'>Coming Soon</div>
      </div>

      {/* footer */}
      <footer className='absolute bottom-0 left-0 right-0 z-10 flex h-14 items-center justify-center text-center text-white'>
        <div className='relative text-white'>Footer</div>
      </footer>
    </section>
  );
}

export default ComingSoon;
