'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const btnClass = 'py-3 text-white bg-blue-500 min-w-30 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

interface Item {
  id: number;
  title: string;
}

export default function Page() {
  const [selectedId, setSelectedId] = useState<number | undefined>();
  const [items, setItems] = useState<Item[]>([
    { id: 1, title: 'Item: 1' },
    { id: 2, title: 'Item: 2' }
  ]);

  function addItem() {
    const newId = items.length === 0 ? 1 : items[items.length - 1].id + 1;
    setItems(prev => [...prev, { id: newId, title: 'Item: ' + newId }]);
  }

  function removeItem() {
    setItems(prev => prev.filter(item => item.id != selectedId));
    setSelectedId(undefined);
  }

  return (
    <div className="wrapper">
      <div className="flex gap-[200px] items-center cursor-">
        <div>
          <button className={btnClass} onClick={() => addItem()}>
            Add
          </button>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <AnimatePresence>
              {items.map(item => (
                <motion.li
                  key={item.id}
                  className={clsx(
                    'bg-amber-400 py-3 px-16 will-change-transform',
                    selectedId === item.id && 'outline-2 outline-blue-700 outline-offset-2'
                  )}
                  onClick={() => setSelectedId(item.id)}
                  layout
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}>
                  {item.title}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
        <div>
          <button disabled={!selectedId} className={btnClass} onClick={() => removeItem()}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
