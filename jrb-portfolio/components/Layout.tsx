import Head from "next/head";

import Header from "./Header";
import Navbar from "./Navbar";

import { PageStateProps } from "../slice/Types";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";

const Layout = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();

  const pageProps: PageStateProps[] = useSelector(
    (state: RootState) => state.page
  );

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
      <div>
        {pageProps.map((page, index) => {
          if (page.active === true)
            return (
              <div key={page.name} className="page">
                {page.page}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Layout;
