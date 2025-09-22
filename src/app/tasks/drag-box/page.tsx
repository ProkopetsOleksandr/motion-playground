'use client';

import { motion } from 'motion/react';
import { useRef } from 'react';

export default function Page() {
  const ref = useRef(null);

  return (
    <div className="wrapper overflow-hidden">
      <div ref={ref} className="w-[600px] h-[600px] bg-amber-900">
        <motion.div className="box-200" drag dragElastic={0.05} dragConstraints={ref}></motion.div>
      </div>
    </div>
  );
}
