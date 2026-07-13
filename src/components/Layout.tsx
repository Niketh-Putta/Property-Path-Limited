import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import AuthCodeHandler from './AuthCodeHandler'

export default function Layout() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div id="top" />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-canvas-50 via-canvas-50 to-canvas-100" />
        <div className="botanical absolute inset-0 opacity-90" />
        <div className="noise absolute inset-0 opacity-40" />
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold-300/15 blur-3xl" />
        <div className="absolute -bottom-24 right-[-140px] h-[520px] w-[520px] rounded-full bg-ink-950/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-r from-ink-950 via-ink-900 to-gold-300 opacity-[0.12]" />
      </div>

      <Navbar />
      <main>
        <AuthCodeHandler />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 10, filter: 'blur(6px)' }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, filter: 'blur(6px)' }}
            transition={
              reduceMotion
                ? { duration: 0.1 }
                : { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }
            }
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
