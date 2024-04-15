import "./Project.css";
import reactpizza from "../../assets/reactpizza.png";
import gym from "../../assets/gym.jpg";
import reactsnickers from "../../assets/reactsnickers.png";

function Project() {
  return (
    <div id="project">
      <div className="project__title">
        <p>Проекты, над которыми я работал</p>
      </div>
      <div className="project__about">
        <div>
          <img className="project__img" src={reactpizza} alt="" />
        </div>
        <div className="project__wrapper">
          <div className="project__wrapper-item">
            <div className="project__name">React Pizza</div>
            <div className="project__descr">
              <p>
                “React Pizza” - Сайт создан с использованием ReactJs, популярной
                библиотеки JavaScript для создания пользовательских интерфейсов.
                Код сайта модульный, что облегчает его поддержку и обновление.
              </p>
            </div>
          </div>
          <ul className="project__stack">
            <li className="skill">ReactJS</li>
            <li className="skill">Redux</li>
            <li className="skill">Redux-thunk</li>
            <li className="skill">React Router</li>
            <li className="skill">Axios</li>
            <li className="skill">Json-serve</li>
          </ul>
        </div>
      </div>

      <div className="project__about-2">
        <div className="project__wrapper">
          <div className="project__wrapper-item">
            <div className="project__name">Fit The Club</div>
            <div className="project__descr">
              <p>
                В рамках данного проекта на Reactjs я создал замечательный
                адаптивный сайт для фитнес-центра, пользуясь React-хуками,
                современным CSS, Framer Motion и многое другое. Для обеспечения
                контактной формы на сайте я воспользовался библиотекой Email js,
                чтобы сделать его более функциональным и практичным. Я работал
                над этим в одиночку!
              </p>
            </div>
          </div>
          <ul className="project__stack">
            <li className="skill">ReactJS</li>
            <li className="skill">Redux</li>
            <li className="skill">React hooks</li>
            <li className="skill">Axios</li>
            <li className="skill">Framer motion</li>
          </ul>
        </div>

        <div>
          <img className="project__img" src={gym} alt="" />
        </div>
      </div>

      <div className="project__about">
        <div>
          <img className="project__img" src={reactsnickers} alt="" />
        </div>
        <div className="project__wrapper">
          <div className="project__wrapper-item">
            <div className="project__name">DadSneakers</div>
            <div className="project__descr">
              <p>
                Веб-сайт электронной коммерции для бренда кроссовок
                “DadSneakers”, созданный на ReactJs. Сайт имеет современный
                дизайн и адаптивную верстку, обеспечивая безупречный
                пользовательский опыт на различных устройствах. На главной
                странице размещен динамичный баннер, демонстрирующий последние
                коллекции и акции. Сайт имеет чистую и интуитивно понятную
                навигацию с меню, включающим ссылки на различные категории
                товаров, такие как мужская, женская и детская обувь. На
                страницах категорий предусмотрена система фильтрации,
                позволяющая пользователям сортировать кроссовки по цене,
                размеру, цвету и стилю.
              </p>
            </div>
          </div>
          <ul className="project__stack">
            <li className="skill">HTML</li>
            <li className="skill">CSS</li>
            <li className="skill">React</li>
            <li className="skill">React Router</li>
            <li className="skill">Axios</li>
            <li className="skill">JWT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Project;
