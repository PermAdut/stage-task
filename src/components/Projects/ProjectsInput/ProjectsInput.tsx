import useDebounce from "../../../hooks/useDebounce";
import type { ProjectInputProps } from "./ProjectInputTypes";
import styles from "./ProjectsInput.module.css";
const ProjectsInput = (props: ProjectInputProps) => {
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value.toLowerCase();
    const filteredProjects = props.initialProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchValue) ||
        project.description.toLowerCase().includes(searchValue),
    );
    props.searchProjects(filteredProjects);
  }
  const debouncedSearch = useDebounce<(event: React.ChangeEvent<HTMLInputElement>) => void>(handleSearch, 300);
  return (
    <div className={styles.projects_search_wrapper}>
      <input
        name="projects_search"
        id="projects_search"
        autoComplete="off"
        type="text"
        className={styles.projects_search}
        placeholder="Search projects"
        onChange={debouncedSearch}
      />
    </div>
  );
};
export default ProjectsInput;
