import { useState, type ReactNode } from "react";
import { projects, type Project } from "../../../constants/Project.constants";
import ProjectItem from "../ProjectItem/ProjectItem";
import ProjectsInput from "../ProjectsInput/ProjectsInput";
import styles from "./Projects.module.css";
const Projects = () => {
  const [displayedProjects, setDisplayedProjects] =
    useState<Project[]>(projects);
  function handleSearchProjects(proj: Project[]) {
    setDisplayedProjects(proj);
  }
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

type EmptyLayoutPropsType = {
  exist: boolean;
  children: React.PropsWithChildren<ReactNode>;
};

const EmptyLayout = (props: EmptyLayoutPropsType) => {
  if (!props.exist)
    return <div className={styles.projects_no_data}>No results</div>;
  return props.children;
};
