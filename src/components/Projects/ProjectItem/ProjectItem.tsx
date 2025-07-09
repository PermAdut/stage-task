import { Suspense, lazy } from "react";
import styles from "./ProjectItem.module.css";
import type { Project } from "../../../constants/Project.constants";
const ProjectItem = (props: Project) => {
  const SVGComponent = lazy(() =>
    import(`../../../assets/images/ReactItems/${props.imageLink}.svg?react`)
      .then((module) => ({
        default: module.default,
      }))
      .catch(() => ({
        default: () => <div>Image not found</div>,
      })),
  );

  return (
    <article className={styles.projects_wrap}>
      <a className={styles.projects_link} href="#">
        <div className={styles.projects_item}>
          <div className={styles.projects_title}>
            <div className={styles.projects_image}>
              <Suspense fallback={<div>Загрузка...</div>}>
                <SVGComponent />
              </Suspense>
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
