import type { HeaderSubItemProps } from "./HeaderSubItem";
import styles from "./HeaderSubItem.module.css";
import classNames from "classnames";
type DisplayedItemProps = Omit<HeaderSubItemProps, "subMenuObjects">;

const DisplayedItem = (el: DisplayedItemProps) => {
  return (
    <span
      onClick={el.handleActiveTab}
      className={classNames(styles.navbar_subitem_title, {
        [styles.arrow]: el.isArrow,
        [styles.arrow_active]: el.isActive,
      })}
    >
      {el.title}
    </span>
  );
};
export default DisplayedItem;
