import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        Rapheal
      </a>
      <ul className="links">
        <li>
          {" "}
          <a href="#home"> Home</a>
        </li>
        <li>
          {" "}
          <a href="#about"> About</a>
        </li>
        <li>
          {" "}
          <a href="#experience"> Experience</a>
        </li>
        <li>
          {" "}
          <a href="#projects"> Projects</a>
        </li>
      </ul>
      <div className="footer_social">
        <a href="linkedin.com/in/ayodele-rapheal-ojo-17426b12b">
          {" "}
          <BsLinkedin />
        </a>
        <a href="https://github.com/ralphdel">
          {" "}
          <BsGithub />
        </a>
        <a href="https://medium.com/@ralphynose">
          {" "}
          <BsMedium />
        </a>
      </div>
      <div className="footer_copyright">
        <small> &copy; Ojo Ayodele Rapheal. All Rights Reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
