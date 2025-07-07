import type { Project } from "../ProjectItem/ProjectItemTypes";
export interface ProjectInputProps{
    initialProjects: Project[];
    searchProjects: (projects: Project[]) => void;
}