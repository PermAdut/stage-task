import HeaderLogo from "../HeaderLogo/HeaderLogo";
import styles from "./HeaderLinks.module.css";
import HeaderNavItem from "../HeaderNavItem/HeaderNavItem";
import { useAppSelector } from "../../../hooks/redux";

const HeaderLinks = () => {
  const navbarItemsState = useAppSelector((state) => state.nav);
  return (
    <div className={styles.navbar_links}>
      <HeaderLogo />
      <div className={styles.navbar_items}>
        {navbarItemsState.navbarItems &&
          navbarItemsState.navbarItems.map((el, index) => (
            <HeaderNavItem
              key={index}
              title={el.title}
              subMenuObjects={el.subMenuObjects}
              isArrow={el.isArrow}
            />
          ))}
      </div>
    </div>
  );
};
export default HeaderLinks;
