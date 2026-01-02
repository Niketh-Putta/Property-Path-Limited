import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen">
      <div id="top" />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-950 to-ink-950" />
        <div className="noise absolute inset-0 opacity-80" />
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold-300/10 blur-3xl" />
        <div className="absolute -bottom-24 right-[-140px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

