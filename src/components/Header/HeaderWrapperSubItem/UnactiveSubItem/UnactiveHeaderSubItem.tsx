import type { UnactiveSubItemProps } from "./UnactiveHeaderSubItemTypes";
import styles from "./UnactiveHeaderSubItem.module.css";
import classNames from "classnames";
const UnactiveHeaderSubItem = (props: UnactiveSubItemProps) => {
  return (
    <div className={styles.navbar_subitem}>
      <DisplayedSubItem
        el={{
          title: props.title,
          isArrow: props.isArrow,
          handleMakeActive: props.handleMakeActive,
          isActive: props.isActive,
        }}
      />
    </div>
  );
};
export default UnactiveHeaderSubItem;

const DisplayedSubItem = ({
  el,
}: {
  el: {
    title: string;
    isArrow: boolean;
    isActive: boolean;
    handleMakeActive: (title: string) => void;
  };
}) => {
  return (
    <span
      onClick={() => el.handleMakeActive(el.title)}
      className={classNames(styles.navbar_subitem_title, {
        [styles.arrow]: el.isArrow,
        [styles.arrow_active]: el.isArrow && el.isActive,
      })}
    >
      {el.title}
    </span>
  );
};
