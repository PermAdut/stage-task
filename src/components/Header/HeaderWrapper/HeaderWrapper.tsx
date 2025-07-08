import { useState } from "react";
import useNavbar from "../../../hooks/useNavbar";
import ActiveHeaderSubItem from "../HeaderWrapperSubItem/ActiveSubItem/ActiveHeaderSubItem";
import UnactiveHeaderSubitem from "../HeaderWrapperSubItem/UnactiveSubItem/UnactiveHeaderSubItem";
import styles from "./HeaderWrapper.module.css";

const HeaderWrapper = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const handleActiveTab = (index: number) => {
    if (activeTab != null && activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };
  const items = useNavbar();
  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.navbar_subitems}>
        {items &&
          items.length > 0 &&
          items.map((el, index) =>
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
    </div>
  );
};
export default HeaderWrapper;
