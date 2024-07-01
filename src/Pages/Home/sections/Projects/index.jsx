import { ProjectCard } from "../../../../components/ProjectCard"
import { Subtitle } from "../../../../components/Subtitle"
import { projects } from "../../../../myProjects"
import { Content } from "./styles"

export function ProjectsSection() {
  return (
    <div id="projects">
      <Subtitle content="Projetos" />
      <Content>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            listTechnologiesIcon={project.listTechnologiesIcon}
            repoLink={project.repoLink}
            siteLink={project.siteLink}
          />
        ))}
      </Content>
    </div>
  )
}
