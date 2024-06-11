import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import ME from "/images/menobg1.png";
import "./Home.css";

const Home = () => {
  return (
    <header id="home">
      <div className="container home_container">
        <h5>Hello, I'm </h5>
        <h1>Ojo Ayodele Rapheal</h1>
        <h5 className="text-ligh">
          {" "}
          Software Developer | FrontEnd Developer | Software QA{" "}
        </h5>
        <div className="cta">
          <a
            href="https://docs.google.com/document/d/19a-TruhBZz7_rKC6WK1atBW_MFbpYlAk8NZ_LmV1SeQ/edit?usp=sharing"
            download
            className="btn"
          >
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
        <div className="home_social">
          <a href="">
            <BsLinkedin />
          </a>
          <a href="">
            <BsGithub />
          </a>
          <a href="">
            <BsMedium />
          </a>
        </div>
        <div className="me">
          <img src={ME} alt="Ralph" />
        </div>
        <a href="#contact" className="scroll_down">
          {" "}
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Home;
