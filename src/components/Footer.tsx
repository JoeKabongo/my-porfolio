import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <section>
      <p className="text-gray-500 text-sm text-center mt-10">
        © {t('footerMessage')}
      </p>
    </section>
  )
}

export default Footer
