import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-dot" />
          Kaiizzz
        </a>
        <nav className="navbar__nav">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
