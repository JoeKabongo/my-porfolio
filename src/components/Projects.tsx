import React from 'react'
import { ProjectCard } from './ProjectCard'
import projects from '../data/projects'

const Projects = () => {
  return (
    <section>
      <h1 className="">PROJECTS</h1>
      <div className="">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
