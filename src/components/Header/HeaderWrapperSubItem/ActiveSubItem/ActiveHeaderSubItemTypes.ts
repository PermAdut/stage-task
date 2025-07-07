import type { UnactiveSubItemProps } from "../UnactiveSubItem/UnactiveHeaderSubItemTypes";

export type ActiveSubItemProps = UnactiveSubItemProps & {
  displayedSubItems?: SubItem[];
};

type SubItem = {
  text: string;
  isMargin: boolean;
  isLink: boolean;
};
