import type { NavBarItem } from "../../../hooks/useNavbar";

export type HeaderLinksProps = Pick<
  NavBarItem,
  "title" | "subMenuObjects" | "isArrow"
>[];
