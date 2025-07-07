export type UnactiveSubItemProps = {
  title: string;
  isArrow: boolean;
  subMenuObjects?: SubMenuObject[];
  isActive: boolean;
  handleMakeActive: (title: string) => void;
};

type SubMenuObject = {
  isLink: boolean;
  isMargin: boolean;
  text: string;
};
