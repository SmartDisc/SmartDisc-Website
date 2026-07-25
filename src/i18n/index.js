import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'

const STORAGE_KEY = 'smartdisc-locale'
export const SUPPORTED_LOCALES = ['en', 'de']

function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && SUPPORTED_LOCALES.includes(saved)) return saved
  } catch { /* localStorage unavailable */ }
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { en, de },
})

/** Keep <html lang> and the document title in sync with the active locale. */
export function syncDocumentLocale() {
  const locale = i18n.global.locale.value
  document.documentElement.lang = locale
  document.title = i18n.global.t('meta.title')
}

/** Switch the active locale, persist it, and sync the document. */
export function setLocale(locale) {
  if (!SUPPORTED_LOCALES.includes(locale)) return
  i18n.global.locale.value = locale
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch { /* localStorage unavailable */ }
  syncDocumentLocale()
}

export default i18n
