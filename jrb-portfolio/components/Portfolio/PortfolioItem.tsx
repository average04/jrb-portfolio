import styles from "../../styles/PortfolioItem.module.css";

import { motion } from "framer-motion";

import { PortfolioStateProps } from "../../slice/Types";
import Link from "next/link";

const PortfolioItem = ({ project }: { project: PortfolioStateProps }) => {
  return (
    <Link href={project.url} target="_blank">
      <motion.div
        whileHover={{ scale: 1.1 }}
        key={project.name}
        className={styles.catalog_item}
      >
        <img
          className={styles.image}
          src={project.image_path}
          alt={project.name}
        />
        <p className={styles.description}>{project.description}</p>
        <div className={styles.title}> {project.name}</div>
      </motion.div>
    </Link>
  );
};

export default PortfolioItem;
