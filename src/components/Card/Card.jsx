import classes from "./Card.module.css";

const Card = ({ children, className }) => {
  return <article className={`${classes["card"]} ${className}`}>{children}</article>;
};

Card.propTypes = {
  children: Node,
  className: Node,
};

export default Card;
