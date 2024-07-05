import { FaGithub, FaInstagram } from "react-icons/fa";
import classes from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={classes["footer"]}>
      <div>© {year} Indra Oei • Indonesia</div>
      <div className={classes["footer-social"]}>
        <a href="https://instagram.com/codeby.io" target="_blank" rel="nofollow">
          <FaInstagram fontSize="1.25rem" />
        </a>
        <a href="https://github.com/indra-oei" target="_blank" rel="nofollow">
          <FaGithub fontSize="1.25rem" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
