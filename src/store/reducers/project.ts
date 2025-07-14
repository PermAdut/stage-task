import { projects } from "../../constants/Project.constants";
import type { Project } from "../../interfaces/Project.interface";
export const initialState: State = {
  projects: projects,
};
type State = {
  projects: Project[];
};
export const ProjectActionType = {
  SEARCH: "SEARCH",
} as const;

type ActionSearch = {
  type: "SEARCH";
  payload: Project[];
};

type Action = ActionSearch;

export function projectReducer(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case "SEARCH":
      return { projects: action.payload };
    default:
      return state;
  }
}
