'use client';

import { motion, stagger, Variants } from 'motion/react';
import { useState } from 'react';

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delayChildren: stagger(0.2) } }
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Page() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <div>
        <div className="mb-5">
          <button className="px-5 py-3 rounded-md text-white bg-amber-400" onClick={() => setIsActive(prev => !prev)}>
            {isActive ? 'Hide' : 'Show'}
          </button>
        </div>
        <div>
          <motion.ul variants={parentVariants} initial="hidden" animate={isActive ? 'show' : 'hidden'} className="flex gap-3">
            {[...Array(5)].map((_, index) => (
              <motion.li variants={childVariants} key={index} className="box-200" />
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
