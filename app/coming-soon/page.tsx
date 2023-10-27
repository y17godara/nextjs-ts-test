import React from 'react';
import type { Metadata } from 'next';
import bgImage from '/public/static/cs-bg-1.jpg';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Coming Soon',
};

function ComingSoon() {
  return (
    <section className='relative h-screen w-full'>
      {/* Image: for background image */}
      <Image
        src={bgImage}
        alt='Coming Soon Background Image'
        layout='fill'
        objectFit='cover'
        quality={100}
        priority={true}
        placeholder='blur'
        className='z-[-1] bg-background/95 opacity-95 backdrop-blur supports-[backdrop-filter]:bg-background/95'
      />

      {/* div: to give 50% black shade on bg image */}
      <div className='absolute left-0 top-0 flex h-full w-full bg-black opacity-50'></div>

      {/* Content */}
      <div className='w-full p-2 md:w-11/12 lg:9/12 mx-auto h-full'>
        <div className='mx-auto flex h-full w-full items-center justify-center rounded-lg bg-black/40 p-4 text-center backdrop-blur-2xl sm:w-11/12 md:w-9/12'>
          <div className='relative text-white'>Coming Soon</div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
