import classes from "./CardBody.module.css";

const CardBody = ({ children }) => {
  return <p className={classes["card-body"]}>{children}</p>;
};

CardBody.propTypes = {
  children: Node,
};

export default CardBody;
