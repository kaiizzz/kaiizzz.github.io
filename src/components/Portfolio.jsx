import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { featuredProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Portfolio() {
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
          <span className="section__label">Work</span>
          <h2 className="section__title">Selected projects</h2>
        </div>
        <Link to="/projects" className="btn btn--ghost portfolio__view-all">
          View all
        </Link>
      </motion.div>

      <div className="portfolio__grid">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
