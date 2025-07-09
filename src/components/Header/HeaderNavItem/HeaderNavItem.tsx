import styles from "./HeaderNavItem.module.css";
import classNames from "classnames";
import type {
  NavBarItem,
  SubMenuObject,
} from "../../../constants/Navbar.constants";
import type { JSX } from "react";

type HeaderNavItemProps = NavBarItem;

const HeaderNavItem = (props: HeaderNavItemProps) => {
  return (
    <div className={styles.navbar_link}>
      <span
        className={classNames(styles.navbar_item, {
          [styles.arrow]: props.isArrow,
        })}
      >
        {props.title}
      </span>
      {props.subMenuObjects && (
        <ul className={styles.navbar_dropdown_content}>
          {props.subMenuObjects.map((group, groupIndex) => (
            <li key={groupIndex} className={styles.navbar_group}>
              {group.map((item) => (
                <LinkObject
                  key={item.text}
                  text={item.text}
                  href={item.href}
                  extraContent={item.extraContent}
                />
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
type LinkObjectProps = SubMenuObject;

const LinkObject = (el : LinkObjectProps) => {
  function isJSXElement(value: unknown): value is () => JSX.Element {
    return typeof value === 'function';
  }
  const content = (
    <>
      {el.text} {isJSXElement(el.extraContent) && <el.extraContent />}
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
export default HeaderNavItem;
