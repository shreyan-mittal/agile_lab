/* ────────────────────────────────────────────────
   Shared Framer-Motion variants for Intelidge
   ──────────────────────────────────────────────── */

/** Stagger wrapper — delays children sequentially */
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

/** Fade + slide up */
export const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/** Fade + slide in from left */
export const fadeInLeft = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/** Fade + slide in from right */
export const fadeInRight = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/** Card with spring pop */
export const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 20,
    },
  },
}

/** Gentle infinite float */
export const floatVariant = {
  initial: { y: 0 },
  animate: {
    y: [-3, 3, -3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

/** Scale + fade in */
export const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/** Blur swap — used for text transitions (testimonials, etc.) */
export const blurSwap = {
  initial: { opacity: 0, y: 16, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0,  filter: "blur(0px)" },
  exit:    { opacity: 0, y: -16, filter: "blur(8px)" },
}

/** Shimmer — overlay sweep for buttons / headlines */
export const shimmerSweep = {
  animate: {
    x: ["-100%", "200%"],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
      repeatDelay: 2,
    },
  },
}

/** Stagger children that slide up one by one */
export const listStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
}

export const listItem = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}