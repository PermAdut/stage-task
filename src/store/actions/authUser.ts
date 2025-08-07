import { UserActionType } from "../reducers/user";
type UserCredentials = {
    userName:string,
    password:string
}
export function authUser(credentials:UserCredentials) {
  return {
    type: UserActionType.LOGIN,
    payload: credentials,
  };
}