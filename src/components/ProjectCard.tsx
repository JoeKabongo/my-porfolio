import React from 'react'
import type { Project } from '../data/projects'
import { useTranslation } from 'react-i18next'

type Props = {
  project: Project
}

export const ProjectCard = ({ project }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="rounded-lg border-1 border-white/30 mb-10 p-10">
      <div className="flex gap-4">
        <img className="w-20 h-20 rounded-lg" src={project.previewImageLink} />
        <div>
          <h2>{project.title}</h2>
          <p>{t(project.descriptionKey)} </p>
          <div className="flex flex-wrap gap-3 mt-5 mb-5">
            {project.stack.map((tech) => (
              <span className="mr-2 border-1 p-[8px] rounded-sm border-white/30 hover:bg-blue-500">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 text-center ">
        <a
          className=" border-1 p-[8px] border-white/20 bg-blue-500 hover:bg-blue-400"
          href={project.githubLink}
          target="_blank"
        >
          {t('project.viewProjectText')}
        </a>
      </div>
    </div>
  )
}
