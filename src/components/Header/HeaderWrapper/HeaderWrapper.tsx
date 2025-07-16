import { useState } from "react";
import styles from "./HeaderWrapper.module.css";
import HeaderSubItem from "../HeaderSubItem/HeaderSubItem";
import { navbarItems } from "../../../constants/Navbar.constants";
const HeaderWrapper = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const handleActiveTab = (index: number) => {
    if (activeTab != null && activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };
  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.navbar_subitems}>
        {navbarItems &&
          navbarItems.map((el, index) => (
            <HeaderSubItem
              key={index}
              isArrow={el.isArrow}
              title={el.title}
              isActive={activeTab === index}
              handleActiveTab={() => handleActiveTab(index)}
              subMenuObjects={el.subMenuObjects}
            />
          ))}
      </div>
    </div>
  );
};
export default HeaderWrapper;
