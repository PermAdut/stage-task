import type { SubMenuObject } from "../../../interfaces/Navbar.interface";
import styles from './HeaderSubItem.module.css'
type DisplayedSubItemProps = SubMenuObject;

const DisplayedSubItem = (el: DisplayedSubItemProps) => {
  return el.href ? (
    <a className={styles.navbar_subitem_link} href={el.href}>
      {el.text}
    </a>
  ) : (
    <div className={styles.navbar_subitem_link}>{el.text}</div>
  );
};
export default DisplayedSubItem;