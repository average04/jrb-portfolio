import styles from "../styles/Header.module.css";

import { useRef } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import profile from "../public/profile.png";

const Header = () => {
  const constraintsRef = useRef(null);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.desc_wrapper}
        >
          <h1>Jay-R Bayog</h1>
          <p>Hello! Welcome to my page, feel free to look around</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }}>
          <motion.div
            className={styles.image_wrapper}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.div
              className={styles.box}
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            ></motion.div>

            <Image className={styles.image} src={profile} alt="profile" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
