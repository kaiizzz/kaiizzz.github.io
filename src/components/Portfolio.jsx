import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { featuredProjects } from '../data/projects'
import { useCopy } from '../hooks/useCopy'
import ProjectCard from './ProjectCard'

export default function Portfolio() {
  const { t } = useCopy()

  return (
    <section id="portfolio" className="section">
      <motion.div
        className="section__header section__header--row"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <span className="section__label">{t.portfolio.label}</span>
          <h2 className="section__title">{t.portfolio.title}</h2>
        </div>
        <Link to="/projects" className="btn btn--ghost portfolio__view-all">
          {t.portfolio.viewAll}
        </Link>
      </motion.div>

      <div className="portfolio__grid">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.link} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
