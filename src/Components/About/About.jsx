import myImage from "/images/menobg2.png";
import { GiGraduateCap } from "react-icons/gi";
import { BsTelephoneForward } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={myImage} alt="Ralph" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiGraduateCap className="about_icon" />
              <div className="certifications">
                <div>
                  <h5> Degree</h5>
                  <small>
                    Bsc. Industrial Chemistry <br />
                    <i>University of Benin, Nigeria</i>
                  </small>
                </div>
                <div>
                  <h5> Software Development Training</h5>
                  <small>
                    Software Developer <br />
                    <i>Sail Innovation Lab</i>
                  </small>
                </div>
              </div>
            </article>

            <article className="about_card">
              <TfiWorld className="about_icon" />
              <h5> Location</h5>
              <small>Adress...</small>
            </article>
            <article className="about_card">
              <BsTelephoneForward className="about_icon" />
              <h5> Contact </h5>
              <small>
                <ul>
                  <li> Phone:07031569714</li>
                  <li> Email: ralphdel14@yahoo.com</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
          I am an Highly motivated web developer with a strong foundation in
          front-end and back-end technologies. I am Proficient in HTML, CSS,
          React, Node.js and MongoDB &#40;MERN developer&#41;, with hands-on
          experience from a comprehensive training program at Sail Innovation
          Lab. Eager to contribute to innovative web projects and deliver
          high-quality solutions.
        </p>
        </div>
       
      </div>
    </section>
  );
};

export default About;
