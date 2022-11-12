import styles from "../styles/Portfolio.module.css";

import { useSelector } from "react-redux";
import { stat } from "fs";
import { RootState } from "../app/store";

export const Portfolio = () => {
  const projects = useSelector((state: RootState) => state.portfolio);
  return (
    <div className={styles.container}>
      <h1>Portfolio</h1>
      <div className={styles.catalog_wrapper}>
        {projects.map((project, index) => {
          return (
            <div key={project.name} className={styles.catalog_item}>
              {project.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
