import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact" className="contact__container">
      <div className="contact__item">
        <p className="contact__title">Контакты</p>
        <p className="contact__descr">
          Вы можете использовать кнопку Связаться на этой странице, чтобы
          связаться со мной. Я отвечу на ваше сообщение в ближайшее время.
        </p>
      </div>
      <div>
        <button className="contact__btn">Связаться</button>
      </div>
    </div>
  );
}
