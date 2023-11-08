import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from 'auth';
import type { Metadata } from 'next';
import Image from 'next/image';
import defaultImageSrc from 'public/static/avatar-default.svg';
import { Icons } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Profile page',
};

async function Profile() {
  const session = await getServerSession(authOptions);
  // console.log("Profile Page:", session);

  // Check if the user's image is from "i.imgur.com" or not
  const isValidImage =
    session?.user?.image?.includes('i.imgur.com') ||
    session?.user?.image?.includes('lh3.googleusercontent.com');
  return (
    <>
      <section className='flex min-h-screen w-auto flex-col items-center justify-center gap-4'>
        <div className='w-full max-w-lg p-4'>
          <div className='flex flex-col items-center justify-center gap-y-6 text-center'>
            <h1 className='bold text-3xl'>Profile</h1>
            {session ? (
              <>
                <div className='flex flex-col items-center justify-center gap-y-6 text-center'>
                  <Image
                    className='h-32 w-32 cursor-pointer rounded-full border-2 border-gray-800 dark:border-white'
                    src={
                      isValidImage
                        ? session.user.image ?? defaultImageSrc
                        : defaultImageSrc
                    }
                    alt={session?.user?.name || 'Avatar'}
                    width={100}
                    height={100}
                    quality={80}
                  />
                  <p>{session?.user.username || session?.user.name}</p>
                  <p className='flex flex-row gap-2'>
                    {session?.user.email}
                    <span>
                      <Icons.badgeNonVerified
                        variant='text-yellow-400'
                        className='h-2 w-2'
                      />
                    </span>
                  </p>
                </div>
              </>
            ) : (
              <>No session</>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
