import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enLang from './locales/en/en.json'
import jaLang from './locales/ja/ja.json'

const resources = {
  en: {
    translation: enLang,
  },
  ja: {
    translation: jaLang,
  },
}
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ja',
    resources: resources,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
