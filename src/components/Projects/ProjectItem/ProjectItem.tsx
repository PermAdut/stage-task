import styles from "./ProjectItem.module.css";
import type { Project } from "../../../interfaces/Project.interface";

export type PropjectItemProps = Project & {reactElement: React.ReactElement}

const ProjectItem = (props: PropjectItemProps) => {
  return (
    <article className={styles.projects_wrap}>
      <a className={styles.projects_link} href="#">
        <div className={styles.projects_item}>
          <div className={styles.projects_title}>
            <div
              className={styles.projects_image}
            >
              {props.reactElement}
            </div>
            <div className={styles.projects_info}>
              <h3>{props.title}</h3>
            </div>
          </div>
          <div className={styles.projects_desc}>
            <p>{props.description}</p>
            <div className={styles.projects_versions}>
              <span className={styles.projects_version}>{props.version}</span>
              <span className={styles.projects_version_text}>
                {props.moreVersion}
              </span>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ProjectItem;
