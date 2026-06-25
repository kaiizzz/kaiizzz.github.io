import { useTheme } from '../context/ThemeContext'
import { copy, localeForTheme, pickLocalized } from '../data/i18n'

export function useCopy() {
  const { theme } = useTheme()
  const locale = localeForTheme(theme)

  return {
    locale,
    isZh: locale === 'zh',
    t: copy[locale],
    pick: (value) => pickLocalized(value, locale),
  }
}
