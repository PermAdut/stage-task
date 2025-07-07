import styles from "./HeaderNavBurger.module.css";
import type { HeaderBurgerProps } from "./HeaderNavBurgerTypes";
import classNames from "classnames";
const HeaderNavBurger = (props: HeaderBurgerProps) => {
  return (
    <>
      <div className={styles.navbar_burger} onClick={props.handleIsOpen}>
        <div className={styles.navbar_burger_icon}>
          <div
            className={classNames(styles.navbar_burger_line, {
              [styles.navbar_burger_line_active]: props.isOpen,
            })}
          ></div>
          <div
            className={classNames(styles.navbar_burger_line, {
              [styles.navbar_burger_line_active]: props.isOpen,
            })}
          ></div>
          <div
            className={classNames(styles.navbar_burger_line, {
              [styles.navbar_burger_line_active]: props.isOpen,
            })}
          ></div>
        </div>
      </div>
    </>
  );
};
export default HeaderNavBurger;
