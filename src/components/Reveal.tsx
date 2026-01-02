import { motion, type MotionProps, useReducedMotion } from 'framer-motion'
import { cn } from '../lib/cn'

type Props = MotionProps & {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className, delay = 0, ...props }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y: 14, filter: 'blur(10px)' }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={
        reduceMotion
          ? undefined
          : { duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }
      }
      viewport={{ once: true, margin: '-80px' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
