// app/faq/page.tsx
'use client';

import { motion } from 'motion/react';
import { useCallback, useState } from 'react';

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: 'What is Motion.dev?',
    a: 'Motion.dev is a modern animation library for React with powerful primitives like layout animations, springs, and gestures.'
  },
  {
    q: 'Do I need AnimatePresence for accordions?',
    a: 'Not necessarily. If the container stays mounted, a parent with `layout` can smoothly animate height changes when inner content appears/disappears.'
  },
  {
    q: 'What does `layout` do?',
    a: '`layout` measures the element’s previous box and animates to the new one—great for auto height and position changes without manual measurements.'
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = useCallback((i: number) => setOpenIndex(prev => (prev === i ? null : i)), []);

  return (
    <motion.main
      layout="position"
      className="min-h-svh grid place-items-center bg-gradient-to-b from-white via-[#f6f7fb] to-[#eef0f6] px-4 py-10 text-[#1b1f24] antialiased">
      <motion.section layout="position" className="w-full max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight">FAQ — Layout Animations</h1>
        <p className="mt-2 text-base leading-7 text-black/70">
          Click a question to see smooth <code>layout</code>-driven height transitions without text scaling.
        </p>

        <div className="mt-6 grid gap-3">
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                /* ВАЖНО: только позиция, без скейла содержимого */
                layout="position"
                transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 0.6 }}
                className={[
                  'rounded-2xl border border-black/10 p-4',
                  'transition-[background-color,box-shadow] duration-200',
                  isOpen ? 'bg-[#FFF8DC] shadow-[0_8px_24px_rgba(0,0,0,0.12)]' : 'bg-[#F0F0F0] shadow-none'
                ].join(' ')}>
                {/* Шапка — стабильная высота, без layout-анимации */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-3 text-left">
                  {/* фиксируем line-height и минимальную высоту строки, чтобы не «прыгало» */}
                  <span className="text-base font-semibold leading-6">{item.q}</span>

                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    /* только rotate, без layout */
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                    className="shrink-0 text-black/80"
                    aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </button>

                {/* Обёртка, которая реально меняет высоту. Именно её анимируем через layout */}
                <motion.div layout>
                  {isOpen && (
                    <motion.p layout id={`faq-panel-${i}`} initial={false} className="mt-2 text-[15px] leading-7 text-black/80">
                      {item.a}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </motion.main>
  );
}
