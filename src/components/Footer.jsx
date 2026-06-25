import { site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {year} {site.name}. Built with React & Vite.
      </p>
    </footer>
  )
}
