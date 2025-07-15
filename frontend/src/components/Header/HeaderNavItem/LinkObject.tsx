import type { SubMenuObject } from "../../../interfaces/Navbar.interface";
import styles from "./HeaderNavItem.module.css";
type LinkObjectProps = SubMenuObject;

const LinkObject = (el: LinkObjectProps) => {
  const content = (
    <>
      {el.text}
      {el.extraContent && <el.extraContent className={styles.navbar_extra} />}
    </>
  );

  return el.href ? (
    <a className={styles.navbar_dropdown_link} href={el.href}>
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
};
export default LinkObject;
