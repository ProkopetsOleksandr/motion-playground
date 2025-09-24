'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Page() {
  // Page scroll
  const { scrollYProgress } = useScroll();

  // Scroll on top
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Hero section h1
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  // Paralax
  const parallaxWrapperRef = useRef(null);
  const { scrollYProgress: parallaxProgress } = useScroll({ target: parallaxWrapperRef, offset: ['start end', 'end start'] });
  const parallaxY1 = useTransform(parallaxProgress, [0, 1], [-300, 300]);
  const parallaxY2 = useTransform(parallaxProgress, [0, 1], [300, -300]);

  return (
    <div className="">
      <motion.div className="h-[6px] bg-blue-500 fixed" style={{ width }}></motion.div>
      <div className="h-screen bg-[#F5F5F5] grid place-content-center">
        <motion.h1 style={{ scale, y }} className="text-[#111111] text-2xl font-bold">
          Make Your Ideas Move with Motion
        </motion.h1>
      </div>
      <div ref={parallaxWrapperRef} className="h-screen bg-[#f7eacc] flex justify-around items-center gap-5 overflow-hidden">
        <motion.div className="box-200 bg-amber-800" style={{ y: parallaxY1 }}></motion.div>
        <div>
          <h1 className="text-[#111111] text-2xl font-bold">Make Your Ideas Move with Motion</h1>
        </div>
        <motion.div className="box-200" style={{ y: parallaxY2 }}></motion.div>
      </div>
      <div className="h-screen bg-[#F5F5F5] grid place-content-center">
        <motion.h1 style={{ scale, y }} className="text-[#111111] text-2xl font-bold">
          Make Your Ideas Move with Motion
        </motion.h1>
      </div>
    </div>
  );
}
