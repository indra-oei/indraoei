import classes from "./SectionTitle.module.css";

const SectionTitle = ({ children, className }) => {
  return <h2 className={`${classes["section-title"]} ${className}`}>{children}</h2>;
};

SectionTitle.propTypes = {
  children: Node,
  className: Node,
};

export default SectionTitle;
