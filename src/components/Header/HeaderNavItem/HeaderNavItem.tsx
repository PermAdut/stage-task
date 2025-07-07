import styles from "./HeaderNavItem.module.css";
import classNames from "classnames";
import { type HeaderNavItemProps } from "./HeaderNavItemTypes";
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
              el={{
                isMargin: el.isMargin,
                isLink: el.isLink,
                text: el.text,
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

const LinkObject = ({
  el,
}: {
  el: { isMargin: boolean; isLink: boolean; text: string };
}) => {
  return (
    <li className={el.isMargin ? styles.navbar_margin : ""}>
      {el.isLink ? (
        <a className={styles.navbar_dropdown_link} href="#">
          {el.text}
        </a>
      ) : (
        <div>{el.text}</div>
      )}
    </li>
  );
};
export default HeaderNavItem;
