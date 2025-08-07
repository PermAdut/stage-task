import { projects } from "../constants/Project.constants";
import { setFoundProjects } from "../store/actions/setFoundProjects";
import React, { useRef } from "react";
import { useAppDispatch } from "./redux";

export default function useSearch() {
  const dispatch = useAppDispatch();
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value.toLowerCase();
    const filteredProjects = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchValue) ||
        project.description.toLowerCase().includes(searchValue),
    );
    dispatch(setFoundProjects(filteredProjects));
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
