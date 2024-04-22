import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={classes["home-page"]}>
      <h1 className={classes["heading"]}>
        Hello. I am Indra. <br />
        <p className={classes["heading-typer"]}>{">"} I code for a living.</p>
      </h1>
      <p className={classes["short-desc"]}>
        {"I'm passionate about creating breakthrough technology advances"} and robust systems
      </p>
    </div>
  );
};

export default HomePage;
