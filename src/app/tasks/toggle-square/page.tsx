'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function Page() {
  const [isActive, setIsActive] = useState<Boolean>(false);

  return (
    <div className="wrapper">
      <motion.div
        onClick={() => setIsActive(prev => !prev)}
        animate={{
          backgroundColor: isActive ? '#fe9a00' : '#f1f1f1',
          scale: isActive ? 1.5 : 1
        }}
        className="w-[200px] h-[200px]"></motion.div>
    </div>
  );
}
