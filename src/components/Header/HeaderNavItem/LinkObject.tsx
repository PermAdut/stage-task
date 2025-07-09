import type { SubMenuObject } from "../../../interfaces/Navbar.interface";
import { useMemo } from "react";
import styles from './HeaderNavItem.module.css';
type LinkObjectProps = SubMenuObject;

const LinkObject = (el : LinkObjectProps) => {
  const content = useMemo(() => (
    <>
      {el.text}{el.extraContent && <el.extraContent className={styles.navbar_extra}/>}
    </>
  ), [el.extraContent, el.text]);
  return el.href ? (
    <a className={styles.navbar_dropdown_link} href={el.href}>
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
};
export default LinkObject;