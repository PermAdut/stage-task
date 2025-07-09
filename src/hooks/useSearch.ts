import { projects, type Project } from "../constants/Project.constants";
import React, { useRef } from "react";
export default function useSearch(
  setCurrentProjects: (projects: Project[]) => void,
) {
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value.toLowerCase();
    const filteredProjects = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchValue) ||
        project.description.toLowerCase().includes(searchValue),
    );
    setCurrentProjects(filteredProjects);
  }
  return function (args: React.ChangeEvent<HTMLInputElement>) {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      handleSearch(args);
    }, 300);
  };
}
