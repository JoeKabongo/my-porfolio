import React from 'react'
import experiences from '../data/experience'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <section>
      <h1 className="">EXPERIENCE</h1>
      {experiences.map((experience) => (
        <ExperienceCard experience={experience} />
      ))}
    </section>
  )
}

export default Experience
