import type { Transition } from 'framer-motion'

export const easeOutQuint: Transition['ease'] = [0.2, 0.8, 0.2, 1]

export const quickFade: Transition = {
  duration: 0.22,
  ease: easeOutQuint,
}

export const slowFade: Transition = {
  duration: 0.35,
  ease: easeOutQuint,
}

