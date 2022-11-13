import Head from "next/head";

import Header from "./Header";
import Navbar from "./Navbar";

import { PageStateProps } from "../slice/Types";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";

import { motion, AnimatePresence, Variant, Variants } from "framer-motion";

const Layout = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();

  const pageProps: PageStateProps[] = useSelector(
    (state: RootState) => state.page
  );

  const itemAnimations: Variants = {
    initial: () => ({
      x: "20%",
      opacity: 0,
      scale: 0.8,
    }),
    animate: () => ({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    }),
    exit: () => ({
      x: "-20%",
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    }),
  };
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
        <title>Jay-R Bayog</title>
      </Head>

      <Header />
      <Navbar />
      {/* <div>{children}</div> */}
      <AnimatePresence>
        {pageProps.map((page, index) => {
          if (page.active === true)
            return (
              <motion.div
                variants={itemAnimations}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                transition={{ duration: 0.8 }}
                key={page.name + page.id}
                className="page"
              >
                {page.page}
              </motion.div>
            );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
