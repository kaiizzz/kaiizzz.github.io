import { motion } from 'framer-motion'
import { site } from '../data/site'
import { useCopy } from '../hooks/useCopy'

const skills = ['Python', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'Java', 'SQL', 'C#', 'C', 'Ada', 'UI Design', 'Machine Learning', 'Natural Language Processing', 'Artificial Intelligence']

export default function About() {
  const { t } = useCopy()

  return (
    <section id="about" className="section">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section__label">{t.about.label}</span>
        <h2 className="section__title">{t.about.title}</h2>
      </motion.div>

      <div className="about__layout">
        <div className="about__top">
          <motion.div
            className="about__photo-outer"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about__photo-frame">
              <img
                src={site.photo}
                alt={t.about.photoAlt}
                className="about__photo"
              />
            </div>
          </motion.div>

          <motion.div
            className="card about__bio-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t.site.bio.map((paragraph) => (
              <p key={paragraph} className="about__bio">{paragraph}</p>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="card about__skills"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="about__skills-title">{t.about.technologies}</h3>
          <ul className="about__skills-list">
            {skills.map((skill) => (
              <li key={skill} className="tag">{skill}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
