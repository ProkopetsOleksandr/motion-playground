'use client';
// import * as motion from 'motion/react-client';
import { motion, stagger, Variants } from 'motion/react';
import { useEffect, useState } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Горы на закате'
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Океан и пляж'
  },
  {
    src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Лес в тумане'
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    alt: 'Горная река'
  },
  {
    src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Звёздное небо'
  }
];

const parentVariants: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: { duration: 0.5, delayChildren: stagger(0.25), when: 'beforeChildren' }
  }
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, type: 'spring', stiffness: 300, damping: 20 }
  }
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const allLoaded = loadedCount >= images.length;

  // (Опционально) сбрасывать loadedCount при скрытии
  useEffect(() => {
    if (!isVisible) setLoadedCount(0);
  }, [isVisible]);

  return (
    <div className="p-5 w-[80%]">
      <div className="mb-5">
        <p className="text-white text-lg">Loaded count: {loadedCount}</p>
        <button className="px-2 py-1 rounded-lg text-white bg-blue-500" onClick={() => setIsVisible(prev => !prev)}>
          Show images
        </button>
      </div>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={isVisible ? 'show' : 'hidden'}
        className="flex gap-3 flex-wrap">
        {images.map(img => (
          <motion.img
            key={img.src}
            variants={childVariants}
            src={img.src}
            alt={img.alt}
            className="w-[25%] rounded-lg"
            // важное: инкрементить и на error, чтобы не зависнуть
            onLoad={() => setLoadedCount(c => c + 1)}
            onError={() => setLoadedCount(c => c + 1)}
            decoding="async"
          />
        ))}
      </motion.div>
    </div>
  );
}
