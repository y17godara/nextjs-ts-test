import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from 'auth';
import type { Metadata } from 'next';
import Image from 'next/image';
import defaultImageSrc from 'public/static/avatar-default.svg';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Profile page',
};

async function Profile() {
  const session = await getServerSession(authOptions);
  // console.log("Profile Page:", session);

  // Check if the user's image is from "i.imgur.com" or not
  const isImgurImage = session?.user?.image?.includes('i.imgur.com');
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
                    className='h-32 w-32 cursor-pointer rounded-full border border-red-500'
                    src={
                      isImgurImage
                        ? session.user.image ?? defaultImageSrc
                        : defaultImageSrc
                    }
                    alt={session?.user?.name || 'Avatar'}
                    width={100}
                    height={100}
                  />
                  <p>{session?.user.username}</p>
                  <p>{session?.user.email}</p>
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
