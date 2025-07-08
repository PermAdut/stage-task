export type NavBarItem = {
  title: string;
  isArrow: boolean;
  subMenuObjects?: SubMenuObject[];
}

export type SubMenuObject = {
  text: string;
  isLink: boolean;
  isMargin: boolean;
}