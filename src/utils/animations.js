// TheoremLabs — shared animation variants
// Framer Motion. Used across all pages.

// Standard fade-up: body text, paragraphs, cards, labels
export const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: '-60px' },
}

// Slower, more stately fade-up for section headings (h2)
export const fadeUpHeading = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: '-40px' },
}

// Staggered container: wraps a group of children so they animate in sequence
export const staggerContainer = {
  initial: {},
  whileInView: {},
  transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  viewport: { once: true, margin: '-60px' },
}

// Stagger child — use inside staggerContainer
export const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
}

// Slide in from left — for left-column content in 2-col layouts
export const slideInLeft = {
  initial: { opacity: 0, x: -28 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: '-60px' },
}

// Slide in from right — for right-column content in 2-col layouts
export const slideInRight = {
  initial: { opacity: 0, x: 28 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: '-60px' },
}

// Stat counter reveal — for the teal stats bar numbers
export const statReveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true },
}
