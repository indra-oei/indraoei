import { FaInstagram, FaLinkedin } from "react-icons/fa";
import classes from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={classes["footer"]}>
      <div>© {year} Indra Oei • Indonesia</div>
      <div className={classes["footer-social"]}>
        <a href="https://instagram.com/indra.oei" target="_blank" rel="nofollow">
          <FaInstagram fontSize="1.5rem" />
        </a>
        <a href="https://linkedin.com/in/indraoei" target="_blank" rel="nofollow">
          <FaLinkedin fontSize="1.5rem" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
