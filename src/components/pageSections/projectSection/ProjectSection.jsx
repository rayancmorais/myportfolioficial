import {
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
  TechnologiesList,
  TechnologyTag,
  CardContent,
} from "./ProjectSection.styles";
import { SectionContainer } from "../../common";

import {
  SectionTitle,
  SectionSubtitle,
} from "../certificationSection/CertificationSection.styles";

import projectsData from "./projectsData.json";

export const ProjectsSection = () => {
  return (
    <SectionContainer id="projects">
      <SectionTitle>Project</SectionTitle>
      <SectionSubtitle>My featured works</SectionSubtitle>
      <ProjectsGrid>
        {projectsData.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <CardContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechnologiesList>
                {project.technologies.map((tech, index) => (
                  <TechnologyTag key={index}>{tech}</TechnologyTag>
                ))}
              </TechnologiesList>
              {project.link && (
                <ProjectLink
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </ProjectLink>
              )}
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </SectionContainer>
  );
};
