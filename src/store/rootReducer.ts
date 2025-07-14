import { combineReducers } from "redux";
import { navReducer } from "./reducers/navbar";
import { projectReducer } from "./reducers/project";

export const rootReducer = combineReducers({
  nav: navReducer,
  project: projectReducer,
});
