import { useEffect, useRef } from 'react'
import { site } from '../data/site'

const SHINE_DURATION = 6000

export default function FlounderyBrand({ company }) {
  const innerRef = useRef(null)

  useEffect(() => {
    const inner = innerRef.current
    if (!inner) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let raf = 0
    let start = 0

    const syncOffsets = () => {
      const innerRect = inner.getBoundingClientRect()
      const width = innerRect.width
      inner.style.setProperty('--shine-size', `${width * 3}px`)

      inner.querySelectorAll('[data-shine]').forEach((el) => {
        const offset = el.getBoundingClientRect().left - innerRect.left
        el.style.setProperty('--shine-offset', `${offset}px`)
      })

      return width
    }

    const paint = (width) => {
      inner.style.setProperty('--shine-x', reduced.matches ? '0px' : `${-width * 2}px`)
    }

    const tick = (time) => {
      if (!start) start = time
      const width = syncOffsets()
      const progress = ((time - start) % SHINE_DURATION) / SHINE_DURATION
      inner.style.setProperty('--shine-x', `${-width * 2 * progress}px`)
      raf = requestAnimationFrame(tick)
    }

    const onResize = () => {
      const width = syncOffsets()
      if (reduced.matches) paint(width)
    }

    const onMotionChange = () => {
      cancelAnimationFrame(raf)
      const width = syncOffsets()
      if (reduced.matches) {
        paint(width)
      } else {
        start = 0
        raf = requestAnimationFrame(tick)
      }
    }

    const width = syncOffsets()
    if (reduced.matches) {
      paint(width)
    } else {
      raf = requestAnimationFrame(tick)
    }

    const ro = new ResizeObserver(onResize)
    ro.observe(inner)
    window.addEventListener('resize', onResize)
    reduced.addEventListener('change', onMotionChange)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('resize', onResize)
      reduced.removeEventListener('change', onMotionChange)
    }
  }, [])

  return (
    <a
      href={site.flounderyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hero__tagline-brand"
    >
      <span ref={innerRef} className="hero__tagline-brand-inner">
        <span className="hero__tagline-company" data-shine>
          {company.trim()}
        </span>
        <span
          className="hero__tagline-logo"
          data-shine
          style={{ '--logo-url': `url(${site.logo})` }}
          aria-hidden="true"
        />
      </span>
    </a>
  )
}
