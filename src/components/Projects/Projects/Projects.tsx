import { useState, useCallback } from "react";
import { type Project } from "../../../interfaces/Project.interface";
import { projects } from "../../../constants/Project.constants";
import ProjectItem from "../ProjectItem/ProjectItem";
import ProjectsInput from "../ProjectsInput/ProjectsInput";
import EmptyLayout from "../../ui/EmptyLayout/EmptyLayout";
import styles from "./Projects.module.css";

const Projects = () => {
  const [displayedProjects, setDisplayedProjects] =
    useState<Project[]>(projects);
  const handleSearchProjects = useCallback((proj: Project[]) => {
    setDisplayedProjects(proj);
  }, []);
  return (
    <section className={styles.projects}>
      <div className="container">
        <ProjectsInput searchProjects={handleSearchProjects} />
        <div className={styles.projects_items}>
          <EmptyLayout exist={displayedProjects.length > 0}>
            {displayedProjects.map((project, index) => (
              <ProjectItem
                key={index}
                image={project.image}
                altText={project.altText}
                title={project.title}
                description={project.description}
                version={project.version}
                moreVersion={project.moreVersion}
              />
            ))}
          </EmptyLayout>
        </div>
      </div>
    </section>
  );
};
export default Projects;
