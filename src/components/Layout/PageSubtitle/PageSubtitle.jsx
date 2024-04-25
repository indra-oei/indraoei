import classes from "./PageSubtitle.module.css";

const PageSubtitle = ({ children }) => {
  return <p className={classes["page-subtitle"]}>{children}</p>;
};

PageSubtitle.propTypes = {
  children: Node,
};

export default PageSubtitle;
