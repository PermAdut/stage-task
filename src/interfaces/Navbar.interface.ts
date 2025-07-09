export type NavBarItem = {
  title: string;
  isArrow: boolean;
  subMenuObjects?: SubMenuObject[][];
};

export type SubMenuObject = {
  text: string;
  href?: string;
  extraContent?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
      titleId?: string;
      desc?: string;
      descId?: string;
    }
  >;
};
