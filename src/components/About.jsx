import { motion } from 'framer-motion'
import { site } from '../data/site'

const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'UI Design']

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section__label">About</span>
        <h2 className="section__title">A bit about me</h2>
      </motion.div>

      <div className="about__grid">
        <motion.div
          className="card about__card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="about__bio">{site.bio}</p>
        </motion.div>

        <motion.div
          className="card about__skills"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="about__skills-title">Technologies</h3>
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
