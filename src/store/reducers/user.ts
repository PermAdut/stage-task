import { users } from "../../constants/User.constants";
export const initialState: State = {
  isAuthenticated: false,
  error: null,
};
type State = {
  isAuthenticated: boolean;
  error: string | null;
};
export const ProjectActionType = {
  LOGIN: "LOGIN",
} as const;

type ActionLogin = {
  type: "LOGIN";
  payload: {
    userName: string;
    password: string;
  };
};

type Action = ActionLogin;

export function userReducer(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case ProjectActionType.LOGIN: {
      const foundUser = users.find(
        (user) => user.userName === action.payload.userName,
      );
      if (!foundUser) {
        return { ...state, error: "Incorrect username" };
      } else if (foundUser.password === action.payload.password) {
        return { ...state, isAuthenticated: true, error: null };
      } else {
        return { ...state, error: "Incorrect password" };
      }
    }
    default:
      return state;
  }
}
