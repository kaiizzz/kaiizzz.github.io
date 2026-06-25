import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useCopy } from '../hooks/useCopy'

function isNavLinkActive(link, location) {
  if (link.to === '/education') return location.pathname === '/education'
  if (link.to === '/projects') return location.pathname === '/projects'
  if (link.to === '/#hero') {
    return location.pathname === '/' && (!location.hash || location.hash === '#hero')
  }
  return location.pathname === '/' && location.hash === link.to.replace('/', '')
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobileNav, setIsMobileNav] = useState(false)
  const location = useLocation()
  const { toggleTheme } = useTheme()
  const { t } = useCopy()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobileNav(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!isMobileNav) {
      document.body.style.overflow = ''
      return undefined
    }

    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, isMobileNav])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__inner">
        <div className="navbar__brand">
          <Link to="/" className="navbar__logo">
            {t.site.title}
          </Link>
          <button
            type="button"
            className="navbar__zhu"
            onClick={toggleTheme}
            aria-label={t.themeToggle.ariaLabel}
            data-hint={t.themeToggle.hint}
          >
            <span className="navbar__zhu-icon" aria-hidden="true" />
            <span className="navbar__zhu-hint">
              <span className="navbar__zhu-hint-text">{t.themeToggle.hint}</span>
              <span className="navbar__zhu-hint-brush" aria-hidden="true" />
            </span>
          </button>
        </div>

        <div className="navbar__actions">
          <button
            type="button"
            className={`navbar__menu-toggle${menuOpen ? ' navbar__menu-toggle--open' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="navbar-menu"
            aria-label={menuOpen ? t.menu.close : t.menu.open}
          >
            <span className="navbar__menu-bar" />
            <span className="navbar__menu-bar" />
            <span className="navbar__menu-bar" />
          </button>

          <nav
            id="navbar-menu"
            className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}
            aria-hidden={isMobileNav && !menuOpen ? true : undefined}
          >
            {t.nav.map((link) => {
              const isActive = isNavLinkActive(link, location)

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
