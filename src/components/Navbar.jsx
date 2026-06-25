import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks, site } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

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
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-dot" />
          {site.title}
        </Link>
        <nav className="navbar__nav">
          {navLinks.map((link) => {
            const isActive =
              link.to === '/education'
                ? location.pathname === '/education'
                : link.to === '/projects'
                  ? location.pathname === '/projects'
                : link.to === '/#hero'
                  ? location.pathname === '/' && (!location.hash || location.hash === '#hero')
                  : location.pathname === '/' && location.hash === link.to.replace('/', '')

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </motion.header>
  )
}
