import React from "react"

import InfoCard from "../../components/information/InfoCard"
import Project from "./components/Project"

import { projects } from "./data"

export default function Projects() {
  return (
    <div className="flex items-center justify-center my-5">
      <div
        className="w-[90%] grid grid-cols-1 md:grid-cols-2
      lg:grid-cols-3 gap-y-5"
      >
        {projects.map((project) => (
          <InfoCard
            key={`project-${project.code}`}
            size="small"
            title={project.title}
          >
            <Project
              description={project.description}
              tecnologies={project.tecnologies}
              repository_link={project.repository_link}
              aplication_link={project.aplication_link}
            />
          </InfoCard>
        ))}
      </div>
    </div>
  )
}
