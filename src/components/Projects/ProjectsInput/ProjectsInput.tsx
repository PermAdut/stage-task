import type { Project } from "../../../constants/Project.constants";
import styles from "./ProjectsInput.module.css";
import useSearch from "../../../hooks/useSearch";
export type ProjectInputProps = {
  searchProjects: (projects: Project[]) => void;
};
const ProjectsInput = (props: ProjectInputProps) => {
  const debouncedSearch = useSearch(props.searchProjects);
  return (
    <div className={styles.projects_search_wrapper}>
      <input
        name="projects_search"
        id="projects_search"
        autoComplete="off"
        type="text"
        className={styles.projects_search}
        placeholder="Search projects"
        onChange={(event) => debouncedSearch(event)}
      />
    </div>
  );
};
export default ProjectsInput;
