import React from 'react';
import type { Metadata } from 'next';
import bgImage from '@/public/static/cs-bg-1.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/icons';

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
        // objectFit='cover'
        quality={100}
        priority={true}
        placeholder='blur'
        className='z-[-1] bg-background/95 opacity-95 backdrop-blur supports-[backdrop-filter]:bg-background/95'
        fill
        sizes='100vw'
      />

      {/* div: to give 50% black shade on bg image */}
      <div className='absolute left-0 top-0 flex h-full w-full bg-black opacity-50'></div>

      {/* Content */}
      <div className='mx-auto h-full w-full p-2 sm:px-8 md:px-16 md:py-10 lg:w-11/12 lg:py-32'>
        <div className='mx-auto flex h-full w-full items-center justify-center rounded-lg bg-black/40 p-4 text-center backdrop-blur-2xl sm:px-8 lg:w-11/12'>
          <div className='grid items-center lg:grid-cols-2'>
            {/* top */}
            <div className='class="p-10 lg:text-start" relative text-center text-white'>
              <div className='flex h-full w-full flex-col items-center justify-center p-4 text-center'>
                <h2>Launching Soon...</h2>
                <p>Welcome to my Personal Portfolio Website</p>
                <h3>Subscribe here to get notified!</h3>

                {/* Socials */}
                <div>
                  <h3>Follow Me:</h3>
                  <div className='flex items-center justify-center space-x-2'>
                    <Link
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-3xl text-white hover:text-blue-500'
                    >
                      <Icons.linkedin />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className='relative p-10 text-center text-white lg:text-start'>
              <div className='flex h-full w-full flex-col items-center justify-center p-4 text-center'>
                <div>
                  <Image
                    src='/icons/favicon.ico'
                    alt='Logo'
                    height={100}
                    width={100}
                    quality={100}
                    priority={true}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
                <div className='text-2xl font-bold'>
                  We are working on something awesome
                </div>
                <div className='mt-2 text-lg'>
                  Please check back in sometime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
