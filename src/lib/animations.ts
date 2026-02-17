export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    hero: 1.4,
  },
  easing: {
    default: [0.4, 0, 0.2, 1] as [number, number, number, number],
    bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
    smooth: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: ANIMATION_CONFIG.duration.slow,
    ease: ANIMATION_CONFIG.easing.default,
  },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: ANIMATION_CONFIG.duration.normal,
    ease: ANIMATION_CONFIG.easing.default,
  },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: ANIMATION_CONFIG.duration.slow,
    ease: ANIMATION_CONFIG.easing.default,
  },
};

export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: ANIMATION_CONFIG.duration.slow,
    ease: ANIMATION_CONFIG.easing.default,
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: ANIMATION_CONFIG.duration.slow,
    ease: ANIMATION_CONFIG.easing.default,
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: ANIMATION_CONFIG.stagger.normal,
    },
  },
};

export const heroTextReveal = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: ANIMATION_CONFIG.easing.default,
  },
};

export const heroImageScale = {
  initial: { scale: 1.1, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: {
    duration: ANIMATION_CONFIG.duration.hero,
    ease: ANIMATION_CONFIG.easing.smooth,
  },
};
