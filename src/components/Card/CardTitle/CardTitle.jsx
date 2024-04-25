import classes from "./CardTitle.module.css";

const CardTitle = ({ children }) => {
  return <h1 className={classes["card-title"]}>{children}</h1>;
};

CardTitle.propTypes = {
  children: Node,
};

export default CardTitle;
