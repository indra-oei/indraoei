import classes from "./PageTitle.module.css";

const PageTitle = ({ children }) => {
  return <h1 className={classes["page-title"]}>{children}</h1>;
};

PageTitle.propTypes = {
  children: Node,
};

export default PageTitle;
