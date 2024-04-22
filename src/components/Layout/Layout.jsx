import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <main className={classes["main"]}>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
