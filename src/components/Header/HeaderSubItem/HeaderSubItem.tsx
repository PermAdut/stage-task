import type { NavBarItem } from "../../../interfaces/Navbar.interface";
import styles from "./HeaderSubItem.module.css";
import DisplayedItem from "./DisplayedItem";
import DisplayedSubItem from "./DisplayedSubItem";
export type HeaderSubItemProps = NavBarItem & {
  handleActiveTab: () => void;
  isActive?: boolean;
};

const HeaderSubItem = (props: HeaderSubItemProps) => {
  return (
    <>
      <div className={styles.navbar_subitem}>
        <DisplayedItem
          title={props.title}
          isArrow={props.isArrow}
          handleActiveTab={props.handleActiveTab}
          isActive={props.isActive}
        />
      </div>
      {props.isActive && props.subMenuObjects && (
        <ul className={styles.navbar_subitem_links}>
          {props.subMenuObjects.map((group, groupIndex) => (
            <li key={groupIndex} className={styles.navbar_subitem_group}>
              {group.map((el, index) => (
                <DisplayedSubItem key={index} text={el.text} href={el.href} />
              ))}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HeaderSubItem;
