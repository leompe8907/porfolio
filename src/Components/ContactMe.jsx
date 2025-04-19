import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../Static/Style/ContactMe.scss";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_kd98iq8", "template_x79wypm", form.current, "FWAdRJH4-6lPp8hlO")
      .then(() => {
        alert("Mensaje enviado correctamente");
      }, () => {
        alert("Error al enviar el mensaje");
      });

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h2>Contáctame</h2>
      <input type="text" name="title" placeholder="Asunto" required />
      <input type="text" name="name" placeholder="Tu nombre" required />
      <input type="email" name="email" placeholder="Tu correo" required />
      <textarea name="message" placeholder="Tu mensaje" required />
      <button type="submit">Enviar</button>
    </form>
  );
}
