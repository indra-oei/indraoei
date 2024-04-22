import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <nav>
        <ul className={classes["nav-item-list"]}>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
