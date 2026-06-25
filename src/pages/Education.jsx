import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { education } from '../data/education'
import { useCopy } from '../hooks/useCopy'

export default function Education() {
  const { t, pick } = useCopy()

  return (
    <div className="education-page">
      <motion.div
        className="education-page__header"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/" className="education-page__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {t.educationPage.back}
        </Link>
        <span className="section__label">{t.educationPage.label}</span>
        <h1 className="education-page__title">{t.educationPage.title}</h1>
        <p className="education-page__intro">{t.educationPage.intro}</p>
      </motion.div>

      <ol className="education-timeline">
        {education.map((item, index) => (
          <motion.li
            key={`${pick(item.institution)}-${pick(item.degree)}`}
            className="education-timeline__item"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="education-timeline__marker" aria-hidden="true">
              <span className="education-timeline__dot" />
            </div>
            <article className="card education-card">
              <div className="education-card__header">
                <div>
                  <h2 className="education-card__degree">
                    {pick(item.degree)}
                    <span className="education-card__field"> · {pick(item.field)}</span>
                  </h2>
                  <p className="education-card__institution">{pick(item.institution)}</p>
                </div>
                <span className="education-card__period">{pick(item.period)}</span>
              </div>
              <p className="education-card__location">{pick(item.location)}</p>
              <p className="education-card__desc">{pick(item.description)}</p>
            </article>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
