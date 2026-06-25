import { useCopy } from '../hooks/useCopy'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useCopy()

  return (
    <footer className="footer">
      <p>
        © {year} {t.site.title}. {t.footer.builtWith}
      </p>
    </footer>
  )
}
