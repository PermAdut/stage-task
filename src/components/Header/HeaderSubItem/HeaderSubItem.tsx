import type {
  NavBarItem,
  SubMenuObject,
} from "../../../constants/Navbar.constants";
import styles from "./HeaderSubItem.module.css";
import classNames from "classnames";
type HeaderSubItemProps = NavBarItem & {
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
          {props.subMenuObjects.map((el, index) => (
            <DisplayedSubItem
              key={index}
              isLink={el.isLink}
              isMargin={el.isMargin}
              text={el.text}
            />
          ))}
        </ul>
      )}
    </>
  );
};

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

type DisplayedSubItemProps = SubMenuObject;

const DisplayedSubItem = (el: DisplayedSubItemProps) => {
  return (
    <li className={el.isMargin ? styles.navbar_margin : ""}>
      {el.isLink ? (
        <a className={styles.navbar_subitem_link} href="#">
          {el.text}
        </a>
      ) : (
        <div className={styles.navbar_subitem_link}>{el.text}</div>
      )}
    </li>
  );
};

export default HeaderSubItem;
