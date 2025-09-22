'use client';

import { motion, Variants } from 'motion/react';
import { useState } from 'react';

const variants: Variants = {
  inactive: {
    backgroundColor: '#f1f1f1',
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5 }
  },
  active: {
    backgroundColor: '#fe9a00',
    scale: 1.5,
    rotate: 45,
    transition: { duration: 0.5 }
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.5 }
  }
};

export default function Page() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="wrapper">
      <motion.div
        className="box-200"
        onClick={() => setIsActive(prev => !prev)}
        variants={variants}
        animate={isActive ? 'active' : 'inactive'}
        whileHover="hover"></motion.div>
    </div>
  );
}
