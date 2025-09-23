import * as motion from 'motion/react-client';
import Link from 'next/link';

import { links } from './data/links';

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
