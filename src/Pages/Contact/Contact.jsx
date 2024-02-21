import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact--container">
        <h1>Contacto</h1>
        <form>
          <div className="contact--container__form">
            <div className="contact--container__form__input">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" />
            </div>
            <div className="contact--container__form__input">
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" />
            </div>
            <div className="contact--container__form__input">
              <label htmlFor="asunto">Asunto</label>
              <input type="text" id="asunto" />
            </div>
            <div className="contact--container__form__input">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" rows="5" />
            </div>
            <div className="contact--container__form__submit">
              <button type="submit">Enviar</button>
            </div>
          </div>
        </form>
      </div>
      <div className="contact--botton">
        <p>Tiempo de respuesta de unas 24 horas</p>
        <div className="contact--botton__info">
          <h2>Información de Contacto</h2>
          <a
            href="mailto:javiazagra12@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            javiazagra12@gmail.com
          </a>
          <a href="https://javierazagra.com" target="_blank" rel="noreferrer">
            javierazagra.com
          </a>
        </div>
        <div className="contact--botton__info">
          <h2>Sígueme en mis Redes Sociales</h2>
          <a href="https://x.com/12jav1_" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a
            href="https://instagram.com/12jav1"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://github.com/JaviiAzagra"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
