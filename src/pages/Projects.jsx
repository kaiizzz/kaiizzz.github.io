import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className="projects-page">
      <motion.div
        className="projects-page__header"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/" className="projects-page__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back home
        </Link>
        <span className="section__label">Work</span>
        <h1 className="projects-page__title">All projects</h1>
        <p className="projects-page__intro">
          Everything I&apos;ve built — from research tools and apps to experiments along the way.
        </p>
      </motion.div>

      <div className="portfolio__grid portfolio__grid--all">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}
