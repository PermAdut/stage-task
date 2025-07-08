import styles from "./HeaderNavItem.module.css";
import classNames from "classnames";
import type {
  NavBarItem,
  SubMenuObject,
} from "../../../constants/Navbar.constants";
import ExtraSvg from "../../../assets/images/ReactItems/ExtraSvg";
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
      {props.subMenuObjects && props.subMenuObjects.length > 0 && (
        <ul className={styles.navbar_dropdown_content}>
          {props.subMenuObjects.map((el) => (
            <LinkObject
              key={el.text}
              text={el.text}
              isLink={el.isLink}
              isMargin={el.isMargin}
              extraContent={el?.extraContent}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
type LinkObjectProps = SubMenuObject;

const LinkObject = (el: LinkObjectProps) => {
  return (
    <li className={el.isMargin ? styles.navbar_margin : ""}>
      {el.isLink ? (
        <a className={styles.navbar_dropdown_link} href="#">
          {el.text} {el.extraContent && <ExtraSvg />}
        </a>
      ) : (
        <div>{el.text}</div>
      )}
    </li>
  );
};
export default HeaderNavItem;
