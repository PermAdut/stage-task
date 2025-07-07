import UnactiveHeaderSubItem from "../UnactiveSubItem/UnactiveHeaderSubItem";
import type { ActiveSubItemProps } from "./ActiveHeaderSubItemTypes";
import styles from "./ActiveHeaderSubItem.module.css";
const ActiveHeaderSubItem = (props: ActiveSubItemProps) => {
  return (
    <>
      <UnactiveHeaderSubItem
        title={props.title}
        isArrow={props.isArrow}
        isActive={props.isActive}
        handleMakeActive={props.handleMakeActive}
      />
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
