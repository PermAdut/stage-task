import ProjectItem from "../ProjectItem/ProjectItem";
import ProjectsInput from "../ProjectsInput/ProjectsInput";
import EmptyLayout from "../../ui/EmptyLayout/EmptyLayout";
import styles from "./Projects.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
import { searchProjects } from "../../../store/slices/projectSlice";

const Projects = () => {
  const projectsState = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(searchProjects(""));
  }, [dispatch]);
  return (
    <section className={styles.projects}>
      <div className="container">
        <ProjectsInput />
        <div className={styles.projects_items}>
          <EmptyLayout exist={projectsState.projects.length > 0}>
            {projectsState.projects.map((project, index) => (
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
