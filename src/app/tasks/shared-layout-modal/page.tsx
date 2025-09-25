'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface IGridItem {
  id: number;
  title: string;
  description: string;
  image?: string;
}

const items: IGridItem[] = [
  {
    id: 1,
    title: 'Grid item 1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur debitis modi voluptates non vel velit iusto possimus dignissimos, vitae delectus.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    title: 'Grid item 2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur debitis modi voluptates non vel velit iusto possimus dignissimos, vitae delectus.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    title: 'Grid item 3',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur debitis modi voluptates non vel velit iusto possimus dignissimos, vitae delectus.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    title: 'Grid item 4',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur debitis modi voluptates non vel velit iusto possimus dignissimos, vitae delectus.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 5,
    title: 'Grid item 5',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur debitis modi voluptates non vel velit iusto possimus dignissimos, vitae delectus.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 6,
    title: 'Grid item 6',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur debitis modi voluptates non vel velit iusto possimus dignissimos, vitae delectus.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function Page() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const activeItem = items.find(x => x.id === activeCardId) ?? null;

  function onCardClick(id: number) {
    setActiveCardId(prev => (prev === id ? null : id));
  }

  function close() {
    setActiveCardId(null);
  }

  useEffect(() => {
    const onKey = (e: any) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeCardId]);

  return (
    <div className="wrapper bg-[#F3F4F6]">
      <div className="p-5 grid grid-cols-3 gap-4">
        {items.map(item => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            className="w-[300px] bg-[#F3F4F6] text-[#101010] rounded-lg overflow-hidden border-[#E5E7EB] border-1 cursor-pointer"
            whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCardClick(item.id)}>
            <motion.div
              layoutId={`media-${item.id}`}
              transition={{ duration: 0 }}
              className="w-full aspect-[16/9] overflow-hidden">
              <img src={item.image} alt="" className="w-full h-full object-cover" />
            </motion.div>
            <div className="p-2">
              <h1 className="text-xl font-semibold">{item.title}</h1>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Модалка */}
      <AnimatePresence>
        {activeItem && (
          <div>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}></motion.div>
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
              <motion.div
                layoutId={`card-${activeItem.id}`}
                transition={{ type: 'spring', stiffness: 300, damping: 40 }}
                className="bg-white text-[#111111] rounded shadow-xl max-w-[500px] w-full overflow-hidden pointer-events-auto">
                <motion.div
                  layoutId={`media-${activeItem.id}`}
                  transition={{ duration: 0 }}
                  className="w-full aspect-[16/9] overflow-hidden">
                  <img src={activeItem.image} alt="" className="w-full h-full object-cover" />
                </motion.div>
                <div className="p-2">
                  <h1 className="text-xl font-semibold">{activeItem.title}</h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm mt-2">
                    {activeItem.description}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
