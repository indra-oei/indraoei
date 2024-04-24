import classes from "./Section.module.css";

const Section = ({ children, width = "full" }) => {
  return <section className={`${classes["section"]} ${classes[width]}`}>{children}</section>;
};

Section.propTypes = {
  children: Node,
  width: String,
};

export default Section;
