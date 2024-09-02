import { createI18n } from 'vue-i18n'
import translations from './translations.json'

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: translations
})

export default i18n