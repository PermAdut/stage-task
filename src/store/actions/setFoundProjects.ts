import type { Project } from "../../interfaces/Project.interface";
import { ProjectActionType } from "../reducers/project";
export function setFoundProjects(projects: Project[]) {
  return {
    type: ProjectActionType.SEARCH,
    payload: projects,
  };
}