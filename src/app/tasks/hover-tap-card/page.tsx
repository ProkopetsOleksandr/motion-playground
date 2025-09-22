'use client';

import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="wrapper">
      <motion.div
        className="box-200"
        initial={{ backgroundColor: '#808080' }}
        whileHover={{ scale: 1.1, backgroundColor: '#87CEFA' }}
        whileTap={{ scale: 0.95, boxShadow: '0px 4px 8px rgba(0,0,0,0.2)' }}></motion.div>
    </div>
  );
}
