export const staggerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const textAnimation = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

export const cardAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};

export const scrollIndicatorAnimation = {
  initial: {
    y: 0,
  },
  animate: {
    y: [0, 20, 0],
    transition: {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
    },
  },
};
