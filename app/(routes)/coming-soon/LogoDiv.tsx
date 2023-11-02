'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LOGO from '@/app/favicon-150x150.png';

export const LogoDiv = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      }}
    >
      <Image
        src={LOGO}
        alt='Logo'
        height={100}
        width={100}
        className='flex h-full w-full scale-150 items-center justify-center rounded-full'
        quality={100}
        priority={true}
      />
    </motion.div>
  );
};
