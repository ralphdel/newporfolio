import contact from "/images/contactmsrs.jpg";
import dmrecipe from "/images/dmrecipers.jpg";
import portfolio from "/images/porfoliowebrs.jpg";
import './Project.css'

const Project = () => {
  return (
    <section id="projects">
      <h5>My Recent Works </h5>
      <h2>Projects</h2>

      <div className="container project_container">
        <article className="project_item">
          <div className="project_item_image">
            <img src={contact} alt="" />
          </div>
          <h3> CONTACT MS</h3>
          <small className="text-light"> MERN Stack</small>
          <div className="project_item_btn">
            <div>
              <a href="https://github.com/ralphdel/contactmanagingsytem_client" className="btn project_btn">
                Github
              </a>
            </div>
            <div>
              <a href="https://ralphcontactms.vercel.app/" className="btn project_btn">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item_image">
            <img src={dmrecipe} alt="" />
          </div>
          <h3> DM RECIPE</h3>
          <small className="text-light"> HTML JS CSS</small>
          <div className="project_item_btn">
            <div>
              <a href="https://github.com/Olori-Odo/First_Project" className="btn project_btn">
                Github
              </a>
            </div>
            <div>
              <a href="https://dmrecipe.netlify.app/" className="btn project_btn" >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item_image">
            <img src={portfolio} alt="" />
          </div>
          <h3> PORTFOLIO</h3>
          <small className="text-light"> HTML JS CSS</small>
          <div className="project_item_btn">
            <div>
              <a href="https://github.com/ralphdel/Myfirstwebsite" className="btn project_btn">
                Github
              </a>
            </div>
            <div>
              <a href="https://ralphayodele.vercel.app/" className="btn project_btn">
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
