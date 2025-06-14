import experiences from '../data/experience'
import ExperienceCard from './ExperienceCard'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()

  return (
    <section>
      <h1>{t('experienceSectionTitle')}</h1>
      <p className="mb-4">{t('projectionSectionIntro')} 😊</p>
      {experiences.map((experience, index) => (
        <ExperienceCard experience={experience} key={index} />
      ))}
    </section>
  )
}

export default Experience
