'use client';

import { motion } from 'motion/react';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper-layout text-white">
      <motion.button
        initial={{ top: -100 }}
        animate={{ top: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        whileTap={{ top: 23, transition: { duration: 0.1 } }}
        className="text-white cursor-pointer bg-blue-500 px-2 py-1 rounded absolute top-5 left-5"
        onClick={() => location.replace('/')}>
        Go back
      </motion.button>
      <div>{children}</div>
    </div>
  );
}
