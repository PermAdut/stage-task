import HeaderLogo from "../HeaderLogo/HeaderLogo";
import styles from "./HeaderLinks.module.css";
import HeaderNavItem from "../HeaderNavItem/HeaderNavItem";
import useNavbar from "../../../hooks/useNavbar";

const HeaderLinks = () => {
  const items = useNavbar();
  return (
    <div className={styles.navbar_links}>
      <HeaderLogo />
      <div className={styles.navbar_items}>
        {items &&
          items.length > 0 &&
          items.map((el, index) => (
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
