import styles from "./HeaderNavItem.module.css";
import classNames from "classnames";
import type { NavBarItem } from "../../../interfaces/Navbar.interface";
import LinkObject from "./LinkObject";
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

export default HeaderNavItem;
