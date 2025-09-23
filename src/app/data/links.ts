export type LinkItem = { href: string; label: string; description: string };

export const links: LinkItem[] = [
  // {
  //   href: '/staggered-images',
  //   label: 'Staggered images',
  //   description: 'Images that display one by one (Stagger effect)'
  // },
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
  },
  {
    href: '/tasks/layout-accordion',
    label: 'Layout Accordion',
    description: 'Learning how to use layout animations for auto-height and smooth reflow'
  }
];
