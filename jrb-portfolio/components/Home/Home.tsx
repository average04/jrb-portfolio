import styles from "../../styles/Home.module.css";

import { motion } from "framer-motion";
import { useRef } from "react";

export const Home = () => {
  const scrollRef = useRef(null);
  return (
    <div className={styles.container}>
      <motion.h1
        // initial={{ opacity: 0, y: -50 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ root: scrollRef }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Hello!
      </motion.h1>
      <motion.p
        // initial={{ opacity: 0, y: -70 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ root: scrollRef }}
        transition={{ delay: 0.5, duration: 1 }}
        className={styles.description}
      >
        My name is Jay-R, Software Developer for three years now and counting :){" "}
        <br />
        Developed applications using C# .Net and React though always willing to
        learn new stacks
        <br />
        Feel free to look around, most of the projects here are pretty simple
        <br />
        You can know me more on about page, its more serious
        <br />
        You can contact me on contact page, duh
      </motion.p>
    </div>
  );
};
