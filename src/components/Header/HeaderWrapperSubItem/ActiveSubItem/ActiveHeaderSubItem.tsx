import classNames from "classnames";
import styles from "./ActiveHeaderSubItem.module.css";
import type {
  NavBarItem,
  SubMenuObject,
} from "../../../../constants/Navbar.constants";
type ActiveSubItemProps = NavBarItem & {
  displayedSubItems?: SubMenuObject[];
  handleActiveTab: () => void;
};

const ActiveHeaderSubItem = (props: ActiveSubItemProps) => {
  return (
    <>
      <div className={styles.navbar_subitem}>
        <DisplayedItem
          title={props.title}
          isArrow={props.isArrow}
          handleActiveTab={props.handleActiveTab}
        />
      </div>
      {props.displayedSubItems && props.displayedSubItems.length > 0 && (
        <ul className={styles.navbar_subitem_links}>
          {props.displayedSubItems.map((el, index) => (
            <DisplayedSubItem key={index} el={el} />
          ))}
        </ul>
      )}
    </>
  );
};

const DisplayedItem = (el: Omit<ActiveSubItemProps, "displayedSubItems">) => {
  return (
    <span
      onClick={el.handleActiveTab}
      className={classNames(styles.navbar_subitem_title, {
        [styles.arrow]: el.isArrow,
        [styles.arrow_active]: el.isArrow,
      })}
    >
      {el.title}
    </span>
  );
};

const DisplayedSubItem = ({
  el,
}: {
  el: { text: string; isLink: boolean; isMargin: boolean };
}) => {
  return (
    <li className={el.isMargin ? styles.navbar_margin : ""}>
      {el.isLink ? (
        <a className={styles.navbar_subitem_link} href="#">
          {el.text}
        </a>
      ) : (
        <div>{el.text}</div>
      )}
    </li>
  );
};

export default ActiveHeaderSubItem;
