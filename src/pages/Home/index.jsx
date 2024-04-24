import SectionText from "../../components/Layout/SectionText/SectionText";
import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={classes["home-page"]}>
      <h1 className={classes["heading"]}>
        Hello. I am Indra. <br />
        <p className={classes["heading-typer"]}>{">"} I code for a living.</p>
      </h1>
      <SectionText className={classes["short-desc"]}>
        {"I'm passionate about creating breakthrough technology advances"} and robust systems
      </SectionText>
    </div>
  );
};

export default HomePage;
