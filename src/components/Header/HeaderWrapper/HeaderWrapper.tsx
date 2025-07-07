import useNavbar from "../../../hooks/useNavbar";
import ActiveHeaderSubItem from "../HeaderWrapperSubItem/ActiveSubItem/ActiveHeaderSubItem";
import UnactiveHeaderSubitem from "../HeaderWrapperSubItem/UnactiveSubItem/UnactiveHeaderSubItem";
import styles from "./HeaderWrapper.module.css";
import type { HeaderWrapperProps } from "./HeaderWrapperTypes";
const HeaderWrapper = () => {
  const items = useNavbar<HeaderWrapperProps>();
  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.navbar_subitems}>
        {items &&
          items.length > 0 &&
          items.map((el, index) =>
            el.isActive ? (
              <ActiveHeaderSubItem
                key={index}
                title={el.title}
                isArrow={el.isArrow}
                isActive={el.isActive}
                handleMakeActive={el.handleMakeActive}
                displayedSubItems={el.subMenuObjects}
              />
            ) : (
              <UnactiveHeaderSubitem
                key={index}
                title={el.title}
                isArrow={el.isArrow}
                isActive={el.isActive}
                handleMakeActive={el.handleMakeActive}
              />
            ),
          )}
      </div>
    </div>
  );
};
export default HeaderWrapper;
