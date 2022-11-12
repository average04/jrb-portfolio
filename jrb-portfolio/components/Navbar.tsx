import styles from "../styles/Navbar.module.css";

import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../slice/PageSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleChangePage = (id: number) => {
    dispatch(setActivePage(id));
  };
  return (
    <div className={styles.container}>
      <motion.div className={styles.item}>LOGO</motion.div>

      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className={styles.item}
        transition={{ duration: 0.1 }}
        onClick={() => handleChangePage(1)}
      >
        Portfolio
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className={styles.item}
        transition={{ duration: 0.1 }}
        onClick={() => handleChangePage(2)}
      >
        About
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className={styles.item}
        transition={{ duration: 0.1 }}
        onClick={() => handleChangePage(3)}
      >
        Contact
      </motion.div>
    </div>
  );
};

export default Navbar;
