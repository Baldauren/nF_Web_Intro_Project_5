import "./About.css";
import pointer from "../../assets/Pointer.svg";
import forsv from "../../assets/imgme.png";

function About() {
  return (
    <div id="about" className="container__about">
      <div className="about__text">
        <div className="about__text-header">
          <p>Обо мне</p>
        </div>
        <div className="about__text-descr">
          <p>
            Специализируюсь на HTML, CSS, JavaScript, React и т. д. Мне нравится
            создавать привлекательные и удобные для пользователя веб-сайты.
          </p>
        </div>
        <div className="about__skills">
          <div className="about__skills-leftside">
            <div className="about__skills-text">
              <div>
                <img src={pointer} alt="pointer" />
              </div>
              <div>
                <p>HTML5</p>
              </div>
            </div>
            <div className="about__skills-text">
              <div>
                <img src={pointer} alt="pointer" />
              </div>
              <div>
                <p>CSS3</p>
              </div>
            </div>
            <div className="about__skills-text">
              <div>
                <img src={pointer} alt="pointer" />
              </div>
              <div>
                <p>SCSS/SAAS</p>
              </div>
            </div>
            <div className="about__skills-text">
              <div>
                <img src={pointer} alt="pointer" />
              </div>
              <div>
                <p>Git/GitHub</p>
              </div>
            </div>
          </div>

          <div className="about__skills-leftside">
            <div className="about__skills-text">
              <div>
                <img src={pointer} alt="pointer" />
              </div>
              <div>
                <p>React JS</p>
              </div>
            </div>
            <div className="about__skills-text">
              <div>
                <img src={pointer} alt="pointer" />
              </div>
              <div>
                <p>Vanila JS</p>
              </div>
            </div>
            <div className="about__skills-text">
              <div>
                <img src={pointer} alt="pointer" />
              </div>
              <div>
                <p>GULP/WebPack</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about__skills-rightside">
        <div>
          <img className="forsv" src={forsv} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
