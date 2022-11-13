import styles from "../../styles/Portfolio.module.css";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import PortfolioItem from "./PortfolioItem";

export const Portfolio = () => {
  const projects = useSelector((state: RootState) => state.portfolio);
  return (
    <div className={styles.container}>
      <h1>P o r t f o l i o</h1>
      <div className={styles.catalog_wrapper}>
        {projects.map((project, index) => {
          return <PortfolioItem project={project} />;
        })}
      </div>
    </div>
  );
};
