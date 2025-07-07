export type HeaderNavItemProps = {
  title: string;
  subMenuObjects?: SubMenuObject[];
  isArrow: boolean;
};

type SubMenuObject = {
  isLink: boolean;
  isMargin: boolean;
  text: string;
};
