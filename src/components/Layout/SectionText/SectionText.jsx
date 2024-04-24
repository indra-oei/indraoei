import classes from "./SectionText.module.css";

const SectionText = ({ children, withMargin = true, className }) => {
  return (
    <p className={`${classes["section-text"]} ${withMargin && classes["with-margin"]} ${className}`}>{children}</p>
  );
};

SectionText.propTypes = {
  children: Node,
  withMargin: Boolean,
  className: Node,
};

export default SectionText;
