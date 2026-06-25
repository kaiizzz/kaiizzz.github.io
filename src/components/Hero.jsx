import { motion } from 'framer-motion'
import { useCopy } from '../hooks/useCopy'
import FlounderyBrand from './FlounderyBrand'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { t } = useCopy()

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <motion.p
          className="hero__eyebrow"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="hero__title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {t.hero.greeting}{' '}
          <span className="hero__name">{t.site.name}</span>
        </motion.h1>

        <motion.div
          className="hero__tagline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <span className="hero__tagline-line">
            {t.site.tagline.line1.prefix}
            <FlounderyBrand company={t.site.tagline.line1.company} />
            <span className="hero__tagline-suffix">{t.site.tagline.line1.suffix}</span>
          </span>
          <span className="hero__tagline-line">{t.site.tagline.line2}</span>
        </motion.div>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a href="#portfolio" className="btn btn--primary">
            {t.hero.viewWork}
          </a>
          <a href="#contact" className="btn btn--ghost">
            {t.hero.getInTouch}
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span>{t.hero.scroll}</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  )
}
