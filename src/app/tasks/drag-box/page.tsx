'use client';

import { animate } from 'motion';
import { motion, useMotionValue } from 'motion/react';
import { useRef } from 'react';

export default function Page() {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className="wrapper overflow-hidden">
      <div ref={ref} className="w-[400px] h-[400px] bg-amber-900 flex items-center justify-center">
        <motion.div
          className="box-200 cursor-grab"
          drag
          dragElastic={0.05}
          dragConstraints={ref}
          dragMomentum={false}
          style={{ x, y }}
          onDragEnd={() => {
            animate(x, 0, { type: 'spring', stiffness: 300, damping: 20 });
            animate(y, 0, { type: 'spring', stiffness: 300, damping: 20 });
          }}
        />
      </div>
    </div>
  );
}
