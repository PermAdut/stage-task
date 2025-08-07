import styles from "./ProjectsInput.module.css";
import useSearch from "../../../hooks/useSearch";
const ProjectsInput = () => {
  const debouncedSearch = useSearch();
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
