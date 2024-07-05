import Card from "../Card/Card";
import CardBody from "../Card/CardBody/CardBody";
import CardTitle from "../Card/CardTitle/CardTitle";

import classes from "./ContactCard.module.css";

const ContactCard = ({ title, content, icon, href, href_label }) => {
  return (
    <Card className={classes["contact-card"]}>
      <CardTitle>{title}</CardTitle>
      <CardBody>{content}</CardBody>
      <div className={classes["contact-card__action"]}>
        <a href={href} target="_blank" rel="nofollow">
          <button className={classes["contact-card__action-btn"]}>{href_label}</button>
        </a>
      </div>
      <div className={classes["contact-card__icon"]}>{icon}</div>
    </Card>
  );
};

ContactCard.propTypes = {
  title: String,
  content: String,
  icon: Node,
  href: String,
  href_label: String,
};

export default ContactCard;
