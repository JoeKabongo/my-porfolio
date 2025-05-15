import React from 'react'
import type { Project } from '../data/projects'

type Props = {
  project: Project
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description} </p>
      <div>
        {project.stack.map((tech) => (
          <span>{tech}</span>
        ))}
      </div>
      <a href={project.githubLink}> Github </a>
    </div>
  )
}
