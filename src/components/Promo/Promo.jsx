import "./Promo.css";
import { Link } from "react-scroll";

function Promo() {
  return (
    <div id="promo" className="container__promo">
      <div className="promo__main-text">
        <p>Привет, я Балдаурен, фронтенд-разработчик из Алматы.</p>
      </div>
      <div className="promo__descr">
        <p>
          В этом портфолио вы можете увидеть некоторые из моих работ, включая
          сайты и веб-приложения, которые я разработал для своих клиентов.
          Каждый проект сопровождается описанием, изображениями и ссылкой на
          демонстрацию. Если у вас есть вопросы или предложения, пожалуйста, не
          стесняйтесь связаться со мной. Мои контакты указаны в разделе Контакты
          на этой странице.
        </p>
      </div>
      <div className="promo__btn">
        <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
          <button className="promo__btn-check">Посмотеть резюме</button>
        </Link>
      </div>
    </div>
  );
}

export default Promo;
