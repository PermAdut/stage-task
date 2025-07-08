import styles from "./UnactiveHeaderSubItem.module.css";
import classNames from "classnames";
import type { NavBarItem } from "../../../../constants/Navbar.constants";
type UnactiveSubItemProps = NavBarItem & {
  handleActiveTab: () => void;
};

const UnactiveHeaderSubItem = (props: UnactiveSubItemProps) => {
  return (
    <div className={styles.navbar_subitem}>
      <DisplayedSubItem
        title={props.title}
        isArrow={props.isArrow}
        handleActiveTab={props.handleActiveTab}
      />
    </div>
  );
};
export default UnactiveHeaderSubItem;

const DisplayedSubItem = (el:UnactiveSubItemProps) => {
  return (
    <span onClick={el.handleActiveTab}
      className={classNames(styles.navbar_subitem_title, {
        [styles.arrow]: el.isArrow,
      })}
    >
      {el.title}
    </span>
  );
};
