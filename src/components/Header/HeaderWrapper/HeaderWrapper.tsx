import { useState } from "react";
import {navbarItems} from "../../../constants/Navbar.constants";
import ActiveHeaderSubItem from "../HeaderWrapperSubItem/ActiveSubItem/ActiveHeaderSubItem";
import UnactiveHeaderSubitem from "../HeaderWrapperSubItem/UnactiveSubItem/UnactiveHeaderSubItem";
import styles from "./HeaderWrapper.module.css";
import ReactDOM from "react-dom";
const HeaderWrapper = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const handleActiveTab = (index: number) => {
    if (activeTab != null && activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };
  return ReactDOM.createPortal(
    <div className={styles.navbar_wrapper}>
      <div className={styles.navbar_subitems}>
        {navbarItems.length > 0 &&
          navbarItems.map((el, index) =>
            index === activeTab ? (
              <ActiveHeaderSubItem
                key={index}
                title={el.title}
                isArrow={el.isArrow}
                handleActiveTab={() => {
                  handleActiveTab(index);
                }}
                displayedSubItems={el.subMenuObjects}
              />
            ) : (
              <UnactiveHeaderSubitem
                key={index}
                title={el.title}
                isArrow={el.isArrow}
                handleActiveTab={() => {
                  handleActiveTab(index);
                }}
              />
            ),
          )}
      </div>
    </div>,
    document.body,
  );
};
export default HeaderWrapper;
