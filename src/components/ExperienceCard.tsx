import type { Experience } from '../data/experience'
import { useTranslation } from 'react-i18next'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="mb-10">
      <div className="flex gap-4">
        <img
          className="sm:w-20 sm:h-20  w-10 h-10 rounded-lg"
          src={experience.companyImageLink}
          alt={t('company logo')}
        />
        <div>
          <h2 className="mb-1">{t(experience.titleKey)}</h2>
          <p>{experience.company} </p>
          <p className="text-gray-300 text-sm"> {t(experience.durationKey)} </p>
          <p className="mt-2"> {t(experience.descriptionKey)}</p>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
