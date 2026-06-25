import { motion } from 'framer-motion'
import { site } from '../data/site'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="card project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <div className="project-card__glow" aria-hidden="true" />
      <div className="project-card__header">
        <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="project-card__title">{project.title}</h3>
      </div>
      <p className="project-card__desc">{project.description}</p>
      <ul className="project-card__tags">
        {project.tags.map((tag) => (
          <li key={tag} className="tag tag--sm">{tag}</li>
        ))}
      </ul>
      <div className="project-card__links">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            Live demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section__label">Work</span>
        <h2 className="section__title">Selected projects</h2>
      </motion.div>

      <div className="portfolio__grid">
        {site.projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
