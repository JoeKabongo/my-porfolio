import React from 'react'
import { ProjectCard } from './ProjectCard'
import projects from '../data/projects'

const Projects = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Projects</h1>
      <div className="flex justify-start">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
