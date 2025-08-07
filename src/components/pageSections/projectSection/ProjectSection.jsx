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

import { useTranslation } from "react-i18next";

export const ProjectsSection = () => {
  const { t } = useTranslation();
  const projectsData = [
    {
      id: 1,
      title: t("home.project_section_obj_title1"),
      description: t("home.project_section_obj_description1"),
      technologies: ["React", "Figma", "JavaScript", "Styled Components"],
      imageUrl: "/website.png",
      link: "https://github.com/rayancmorais/myportfolioficial.git",
    },
    {
      id: 2,
      title: t("home.project_section_obj_title2"),
      description:t("home.project_section_obj_description2"),
      technologies: ["React", "NodeJS", "ReactRouter", "State&Effect"],
      imageUrl: "/moviedux.png",
      link: "https://github.com/rayancmorais/moviedeux.git",
    },
    {
      id: 3,
      title: t("home.project_section_obj_title3"),
      description:t("home.project_section_obj_description3"),
      technologies: [
        "React",
        "NodeJS",
        "TypeScript",
        "ContextAPI",
        "ReactRouter",
      ],
      imageUrl: "/chronos2.png",
      link: "https://github.com/rayancmorais/chronos-pomodoro.git",
    },
    {
      id: 4,
      title: t("home.project_section_obj_title4"),
      description:t("home.project_section_obj_description4"),
      technologies: ["Figma", "React", "Tailwind", "TypeScript"],
      imageUrl: "/academy.png",
      link: "https://codi-vercel3-0.vercel.app",
    },
  ];

  return (
    <SectionContainer id="projects">
      <SectionTitle> {t("home.project_section_title")}</SectionTitle>
      <SectionSubtitle>{t("home.project_section_subtitle")}</SectionSubtitle>
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
                  {t("home.project_section_button")}
                </ProjectLink>
              )}
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </SectionContainer>
  );
};
