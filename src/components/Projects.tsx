import { ProjectCard } from './ProjectCard'
import projects from '../data/projects'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <section>
      <h1>{t('experienceSectionTitle')}</h1>
      <p className="mb-4"> {t('project.introDescription')} </p>
      <div>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
