import  cssImg from  '/images/cssimage.png';
import htmlImg from '/images/htmlimage.png';
import javasImg from '/images/javascriptlogo.png';
import typeImg from '/images/typescriptlogo.png';
import rjsImg from '/images/reactnewlogo.png';
import nodeimg from '/images/nodejsbgr.png';
import sqlimg  from '/images/mysqlbgr.png';
import expressimg  from '/images/expressbgr.png';
import mongoImg from  '/images/mongodb.png';
import gitimg from  '/images/gitlogonew.png';
import jestimg from '/images/jestbgr.png';
import postimg from '/images/postmanbgr.png';
import seleniumimg from '/images/seleniumbgr.png';
import './Experience.css'





const Experience = () => {
  return (
    <section id="experience">
     <h5> The Skills I Have</h5>
     <h2> My Experience</h2>

     <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Front-End Development</h3>
        <div className="experience_content">
          <article className="experience_detail">
            <img src={htmlImg} alt="HTML" className="experience_icon" />
            <div>
              <h4>
                HTML
              </h4>
            </div>
          </article>
          <article className="experience_detail">
            <img src={cssImg} alt="CSS" className="experience_icon" />
            <div>
              <h4>
                CSS
              </h4>
            </div>
          </article>
          <article className="experience_detail">
            <img src={javasImg} alt="JS" className="experience_icon" />
            <div>
              <h4>
                JavaScript
              </h4>
            </div>
          </article>
          <article className="experience_detail">
            <img src={typeImg} alt="TS" className="experience_icon" />
            <div>
              <h4>
                TypeScript
              </h4>
            </div>
          </article>
          <article className="experience_detail">
            <img src={rjsImg} alt="REACT" className="experience_icon" />
            <div>
              <h4>
                React.JS
              </h4>
            </div>
          </article>
        </div>
      </div>

      <div className="experience_frontend">
        <h3>Back-End Development</h3>
        <div className="experience_content">
          <article className="experience_detail">
            <img src={nodeimg} alt="NodeJS" className="experience_icon" />
            <div>
              <h4>
                Node JS
              </h4>
            </div>
          </article>
          <article className="experience_detail">
            <img src={sqlimg} alt="MySql" className="experience_icon" />
            <div>
              <h4>
                MySql
              </h4>
            </div>
          </article>
          <article className="experience_detail">
            <img src={expressimg} alt="ExpresJS" className="experience_icon" />
            <div>
              <h4>
                Express JS
              </h4>
            </div>
          </article>
          <article className="experience_detail">
            <img src={mongoImg} alt="MongoDB" className="experience_icon" />
            <div>
              <h4>
                Mongo DB
              </h4>
            </div>
          </article>
        </div>
      </div>

      <div className="experience_frontend">
        <h3>Software Testing</h3>
        <div className="experience_content">
          <article className="experience_detail">
            <img src={jestimg} alt="Jest" className="experience_icon" />
            <div>
              <h4>
                Jest
              </h4>
            </div>
          </article>
          <article className="experience_detail">
            <img src={postimg} alt="postman" className="experience_icon" />
            <div>
              <h4>
               Postman
              </h4>
            </div>
          </article>
          <article className="experience_detail">
            <img src={seleniumimg} alt="Selenium" className="experience_icon" />
            <div>
              <h4>
                Selenium
              </h4>
            </div>
          </article>
          <article className="experience_detail">
            <img src={gitimg} alt="git" className="experience_icon" />
            <div>
              <h4>
                Git
              </h4>
            </div>
          </article>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Experience