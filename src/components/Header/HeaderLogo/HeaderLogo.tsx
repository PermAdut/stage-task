import SvgLogo from "../../../assets/images/icons/logo.svg?react";
import styles from "./HeaderLogo.module.css";
const HeaderLogo = () => {
  return (
    <div className={styles.navbar_logo}>
      <a href="#" title="HOME" className={styles.navbar_logo_link}>
        <SvgLogo className={styles.logo}/>
      </a>
    </div>
  );
};
export default HeaderLogo;
