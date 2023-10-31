'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticIcon = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (event: React.MouseEvent): void => {
    const { clientX, clientY } = event;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;

  return (
    <>
      <motion.div
        className='relative p-1'
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default MagneticIcon;
