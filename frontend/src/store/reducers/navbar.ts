import { navbarItems } from "../../constants/Navbar.constants";
import type { NavBarItem } from "../../interfaces/Navbar.interface";
type State = {
  navbarItems: NavBarItem[];
};
export const initialState: State = {
  navbarItems: navbarItems,
};
export function navReducer(state = initialState) {
  return state;
}
