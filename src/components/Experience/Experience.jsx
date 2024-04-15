import "./Experience.css";
import pointer2 from "../../assets/Pointer2.svg";

function Experience() {
  return (
    <div id="experience" className="container__exp">
      <div className="exp__header">
        <p>Опыт</p>
      </div>

      <div className="exp__list">
        <div className="exp__item">
          <div className="exp__date">
            <p>2024</p>
          </div>

          <div className="exp__about">
            <div className="exp__about-wrapper">
              <div className="exp__about-cityandcomp">
                <div>
                  <img src={pointer2} alt="" />
                </div>
                <div className="exp__about-comp">
                  <p>Nfactorial</p>
                </div>
              </div>
              <div className="exp__about-city">Almaty</div>
            </div>
            <div className="exp__about-work">
              <p>Nfactorial Web Intro</p>
            </div>
          </div>
        </div>

        <div className="exp__item">
          <div className="exp__date">
            <p>2023</p>
          </div>

          <div className="exp__about">
            <div className="exp__about-wrapper">
              <div className="exp__about-cityandcomp">
                <div>
                  <img src={pointer2} alt="" />
                </div>
                <div className="exp__about-comp">
                  <p>Nfactorial</p>
                </div>
              </div>
              <div className="exp__about-city">Almaty</div>
            </div>
            <div className="exp__about-work">
              <p>Nfactorial Start into to Computer Science (java)</p>
            </div>
          </div>
        </div>

        <div className="exp__item">
          <div className="exp__date">
            <p>2023</p>
          </div>
          <div className="exp__about">
            <div className="exp__about-wrapper">
              <div className="exp__about-cityandcomp">
                <div>
                  <img src={pointer2} alt="" />
                </div>
                <div className="exp__about-comp">
                  <p>Udemy</p>
                </div>
              </div>
              <div className="exp__about-city">Online</div>
            </div>
            <div className="exp__about-work">
              <p>Полный курс по JavaScript + React - с нуля до результата</p>
            </div>
          </div>
        </div>
        <div className="exp__item">
          <div className="exp__date">
            <p>2023</p>
          </div>

          <div className="exp__about">
            <div className="exp__about-wrapper">
              <div className="exp__about-cityandcomp">
                <div>
                  <img src={pointer2} alt="" />
                </div>
                <div className="exp__about-comp">
                  <p>Udemy</p>
                </div>
              </div>
              <div className="exp__about-city">Online</div>
            </div>
            <div className="exp__about-work">
              <p>WEB-разработчик 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
