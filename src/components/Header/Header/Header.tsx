import { useState } from "react";
import styles from "./Header.module.css";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import HeaderNavBurger from "../HeaderNavBurger/HeaderNavBurger";
import HeaderWrapper from "../HeaderWrapper/HeaderWrapper";
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className="container">
          <HeaderLinks />
        </div>
        <HeaderNavBurger handleIsOpen={handleIsOpen} isOpen={isOpen} />
        {isOpen && <HeaderWrapper />}
      </nav>
    </header>
  );
};
export default Header;
