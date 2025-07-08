import HeaderLogo from "../HeaderLogo/HeaderLogo";
import styles from "./HeaderLinks.module.css";
import HeaderNavItem from "../HeaderNavItem/HeaderNavItem";
import {navbarItems} from "../../../constants/Navbar.constants";

const HeaderLinks = () => {
  return (
    <div className={styles.navbar_links}>
      <HeaderLogo />
      <div className={styles.navbar_items}>
        {navbarItems.length > 0 &&
          navbarItems.map((el, index) => (
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
