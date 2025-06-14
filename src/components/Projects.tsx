import React from 'react'
import { ProjectCard } from './ProjectCard'
import projects from '../data/projects'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <section>
      <h1 className="">{t('experienceSectionTitle')}</h1>
      <p className="mb-4"> {t('project.introDescription')} </p>
      <div className="">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
