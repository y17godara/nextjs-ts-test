import React from 'react';
import type { Metadata } from 'next';
import bgImage from '/public/static/cs-bg-1.jpg';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Coming Soon',
};

function ComingSoon() {
  return (
    <>
      <Image
        src={bgImage}
        alt='Coming Soon Background Image'
        layout='fill'
        objectFit='cover'
        quality={100}
        priority={true}
        placeholder='blur'
        className='z-[-1] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      />
      <div className='z-1 relative flex flex-col'>
        Hello Coming Soon
      </div>
    </>
  );
}

export default ComingSoon;
