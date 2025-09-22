import * as motion from 'motion/react-client';
import Link from 'next/link';

const links = [
  {
    href: '/staggered-images',
    label: 'Staggered images',
    description: 'Images that display one by one (Stagger effect)'
  },
  {
    href: '/tasks/toggle-square',
    label: 'Toggle square',
    description: 'Learning how to animate between two states using useState and animate'
  },
  {
    href: '/tasks/variants-square',
    label: 'Variants square',
    description: 'Learning how to define multiple states with variants and combine them with interaction props like whileHover'
  },
  {
    href: '/tasks/staggered-list',
    label: 'Staggered list',
    description: 'Learning how to animate multiple children with staggerChildren and delayChildren'
  },
  {
    href: '/tasks/animate-presence-stagger',
    label: 'AnimatePresence staggered list',
    description: 'Learning enter/exit animations with AnimatePresence and delayChildren: stagger() including reverse ordering'
  },
  {
    href: '/tasks/hover-tap-card',
    label: 'Hover & Tap Card',
    description: 'Learning how to use whileHover and whileTap for interactive animations'
  },
  {
    href: '/tasks/animate-presence-list',
    label: 'AnimatePresence List',
    description: 'Learning how to animate adding and removing elements using AnimatePresence'
  },
  {
    href: '/tasks/drag-box',
    label: 'Draggable Box',
    description: 'Learning how to use drag and dragConstraints with animate'
  }
];

export default function Home() {
  return (
    <div className="bg-[#101010] h-screen p-5">
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
        {links.map((link, index) => (
          <motion.li
            key={link.href}
            whileHover={{ scale: 1.025, rotate: 1 }}
            whileTap={{ y: 3 }}
            className="bg-blue-500 inline-block rounded-lg text-white">
            <Link href={link.href} className="block min-h-[65px] p-3">
              <div className="mb-2">
                {index + 1}. {link.label}
              </div>
              <p className="text-sm opacity-80">{link.description}</p>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
