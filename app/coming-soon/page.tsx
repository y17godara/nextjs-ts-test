import React from 'react';
import type { Metadata } from 'next';
import bgImage from '/public/static/cs-bg-1.jpg';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Coming Soon',
};

function ComingSoon() {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src={bgImage}
        alt="Coming Soon Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
        placeholder="blur"
        className="z-[-1] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 opacity-90"
      />
      <div className="overlay w-full h-full bg-black opacity-80 absolute top-0 left-0 flex flex-col items-center justify-center text-white">
        <div className="z-1 relative">
          Coming Soon
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
