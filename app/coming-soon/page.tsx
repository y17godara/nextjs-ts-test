import React from 'react';
import type { Metadata } from 'next';
import bgImage from '@/public/static/cs-bg-1.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import EmailSubscribeForm from '@/components/email-subscribe-form';

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
          <div className='grid items-center gap-y-10 lg:grid-cols-2'>
            {/* top */}
            <div className='lg:text-start" relative p-4 text-center text-white'>
              <div className='flex h-full w-full flex-col items-center justify-center p-4 text-center'>
                <h2 className='text-4xl'>Launching Soon...</h2>
                <p className='text-base font-medium text-gray-300'>
                  Welcome to my Personal Portfolio Website
                </p>
                <h3 className='my-4 text-base font-medium text-gray-300'>
                  Subscribe here to get notified!
                </h3>

                {/* Email Subscribe Form */}
                <EmailSubscribeForm />

                {/* Socials */}
                <div>
                  <h3 className='text-lg'>Follow Me:</h3>
                  <div className='flex items-center justify-center space-x-2'>
                    <Link
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-3xl text-white hover:text-blue-500'
                    >
                      <Icons.linkedIn />
                    </Link>
                    <Link
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-3xl text-white hover:text-blue-500'
                    >
                      <Icons.instagram />
                    </Link>
                    <Link
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-3xl text-white hover:text-blue-500'
                    >
                      <Icons.twitter />
                    </Link>
                    <Link
                      href='#'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-3xl text-white hover:text-blue-500'
                    >
                      <Icons.youTube />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className='relative p-4 text-center text-white lg:text-start'>
              <div className='flex h-full w-full flex-col items-center justify-center p-4 text-center'>
                <div>
                  <Image
                    src='/icons/favicon.ico'
                    alt='Logo'
                    height={50}
                    width={50}
                    quality={100}
                    priority={true}
                  />
                </div>
                <p className='mt-4 text-lg font-bold lg:mt-0'>
                  We are working on something awesome
                </p>
                <p className='mt-2 text-sm'>Please check back in sometime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
