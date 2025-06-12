import React from 'react'
import experiences from '../data/experience'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <section>
      <h1 className="">EXPERIENCE</h1>
      <p className="mb-4">
        I have 3 years of full-time experience as a software engineer, plus 9
        months as an intern during university. Here’s a breakdown of my journey
        so far 😊
      </p>
      {experiences.map((experience) => (
        <ExperienceCard experience={experience} />
      ))}
    </section>
  )
}

export default Experience
