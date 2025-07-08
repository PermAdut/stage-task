import { useState } from "react";
import type { Project } from "../ProjectItem/ProjectItem";
import ProjectItem from "../ProjectItem/ProjectItem";
import ProjectsInput from "../ProjectsInput/ProjectsInput";
import styles from "./Projects.module.css";
const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
      {
        imageLink: "src/assets/images/spring-boot.svg",
        altText: "spring boot",
        title: "spring boot",
        description:
          "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
        version: "3.5.3",
        moreVersion: "+ 9 versions",
      },
      {
        imageLink: "src/assets/images/spring-framework.svg",
        altText: "spring framework",
        title: "spring framework",
        description:
          "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
        version: "6.2.8",
        moreVersion: "+ 8 versions",
      },
      {
        imageLink: "src/assets/images/spring-data.svg",
        altText: "spring data",
        title: "spring data",
        description:
          "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
        version: "2025.0.1",
        moreVersion: "+ 6 versions",
      },
      {
        imageLink: "src/assets/images/spring-cloud.svg",
        altText: "spring cloud",
        title: "spring cloud",
        description:
          "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
        version: "2025.0.0",
        moreVersion: "+ 9 versions",
      },
      {
        imageLink: "src/assets/images/spring-data-flow.svg",
        altText: "spring cloud data flow",
        title: "spring cloud data flow",
        description:
          "Provides an orchestration service for composable data microservice applications on modern runtimes.",
        version: "2.11.15",
        moreVersion: "+ 7 versions",
      },
      {
        imageLink: "src/assets/images/spring-security.svg",
        altText: "spring security",
        title: "spring security",
        description:
          "Protects your application with comprehensive and extensible authentication and authorization support.",
        version: "6.5.1",
        moreVersion: "+ 10 versions",
      },
    ]);
  const [initialProjects, _setInitialProject] = useState(projects);
  function handleSearchProjects(proj: Project[]){
    setProjects(proj);
  }
  return (
    <section className={styles.projects}>
      <div className="container">
        <ProjectsInput initialProjects={initialProjects} searchProjects={handleSearchProjects}/>
        <div className={styles.projects_items}>
          {projects.length > 0 ? projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              imageLink={project.imageLink}
              altText={project.altText}
              description={project.description}
              version={project.version}
              moreVersion={project.moreVersion}
            />
          )) : <div className={styles.projects_no_data}>No results</div>}
        </div>
      </div>
    </section>
  );
};
export default Projects;
