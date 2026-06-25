import { motion } from 'framer-motion'
import { useCopy } from '../hooks/useCopy'

function formatLink(url) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

export default function ProjectCard({ project, index }) {
  const { t, pick } = useCopy()
  const title = pick(project.title)

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
        <h3 className="project-card__title">{title}</h3>
      </div>
      <p className="project-card__desc">{pick(project.description)}</p>
      {project.tags.length > 0 && (
        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag} className="tag tag--sm">{tag}</li>
          ))}
        </ul>
      )}
      <div className="project-card__links">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            {project.linkLabel || formatLink(project.link)}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            {t.projectCard.liveDemo}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        )}
      </div>
    </motion.article>
  )
}
