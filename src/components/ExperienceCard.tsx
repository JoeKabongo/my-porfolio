import React from 'react'
import type { Experience } from '../data/experience'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="mb-10">
      <div className="flex gap-4">
        <img className="w-20 h-20 rounded-lg" src={experience.companyLink} />
        <div>
          <h2 className="mb-1">{experience.title}</h2>
          <p>{experience.company} </p>
          <p className="text-gray-300 text-sm"> {experience.duration} </p>
          <p className="mt-2"> {experience.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
