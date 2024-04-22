import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const location = useLocation();
  const { hash, pathname, search } = location;

  useEffect(() => {
    const tabs = ["/", "/about", "/works", "/skills", "/contact"];
    setTabIndex(tabs.findIndex((tab) => tab === pathname));
  }, [pathname]);

  return (
    <header className={classes["header"]}>
      <nav>
        <ul className={classes["nav-item-list"]}>
          <li className={`${pathname === "/" && classes["active"]}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${pathname === "/about" && classes["active"]}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`${pathname === "/works" && classes["active"]}`}>
            <Link to="/works">Works</Link>
          </li>
          <li className={`${pathname === "/skills" && classes["active"]}`}>
            <Link to="/skills">Skills</Link>
          </li>
          <li className={`${pathname === "/contact" && classes["active"]}`}>
            <Link to="/contact">Contact</Link>
          </li>
          <span className={classes["nav-glider"]} style={{ transform: `translateX(${tabIndex}00%)` }}></span>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
