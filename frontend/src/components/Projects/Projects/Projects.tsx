import ProjectItem from "../ProjectItem/ProjectItem";
import ProjectsInput from "../ProjectsInput/ProjectsInput";
import EmptyLayout from "../../ui/EmptyLayout/EmptyLayout";
import styles from "./Projects.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect, useState, useMemo } from "react";
import { searchProjects } from "../../../store/slices/projectSlice";
import { svgStringToReactComponent } from "../../../utils/svg/svgUtil";

const Projects = () => {
  const projectsState = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const [svgComponents, setSvgComponents] = useState<React.ReactElement[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      await dispatch(searchProjects(""));
    };
    fetchProjects();
  }, [dispatch]);

  useEffect(() => {
    const processSvgs = async () => {
      const svgs = await Promise.all(
        projectsState.projects.map(async (project) => {
          const reactElement = await svgStringToReactComponent(project.image);
          return reactElement;
        }),
      );
      setSvgComponents(svgs);
    };
    if (projectsState.projects.length > 0) {
      processSvgs();
    } else {
      setSvgComponents([]);
    }
  }, [projectsState.projects]);

    const projectItems = useMemo(
    () =>
      projectsState.projects.map((project, index) => (
        <ProjectItem
          key={index}
          {...project}
          reactElement={svgComponents[index]}
        />
      )),
    [projectsState.projects, svgComponents]
  );

  return (
    <section className={styles.projects}>
      <div className="container">
        <ProjectsInput />
        <div className={styles.projects_items}>
          <EmptyLayout exist={projectsState.projects.length > 0}>
            {projectItems}
          </EmptyLayout>
        </div>
      </div>
    </section>
  );
};
export default Projects;
