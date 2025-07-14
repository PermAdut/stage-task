import { combineReducers } from "redux";
import { navReducer } from "./reducers/navbar";
import { projectReducer } from "./reducers/project";
import { userReducer } from "./reducers/user";

export const rootReducer = combineReducers({
  nav: navReducer,
  project: projectReducer,
  user: userReducer,
});
