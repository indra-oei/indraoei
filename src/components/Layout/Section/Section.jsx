import classes from "./Section.module.css";

const Section = ({ children, fullWidth }) => {
  return <section className={`${classes["section"]} ${fullWidth && classes["full-width"]}`}>{children}</section>;
};

Section.propTypes = {
  children: Node,
  fullWidth: Boolean,
};

export default Section;
