import { motion } from 'framer-motion'
import { site } from '../data/site'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <motion.p
          className="hero__eyebrow"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Portfolio
        </motion.p>

        <motion.h1
          className="hero__title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hi, I'm{' '}
          <span className="hero__name">{site.name}</span>
        </motion.h1>

        <motion.p
          className="hero__tagline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {site.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a href="#portfolio" className="btn btn--primary">
            View my work
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  )
}
