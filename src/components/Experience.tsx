import React from 'react'
import experiences from '../data/experience'
import ExperienceCard from './ExperienceCard'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()

  return (
    <section>
      <h1 className="">{t('experienceSectionTitle')}</h1>
      <p className="mb-4">{t('projectionSectionIntro')} 😊</p>
      {experiences.map((experience) => (
        <ExperienceCard experience={experience} />
      ))}
    </section>
  )
}

export default Experience
