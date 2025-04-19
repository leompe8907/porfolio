import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../Static/Style/ContactMe.scss";

export default function ContactMe() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_kd98iq8",
        "template_x79wypm",
        form.current,
        "FWAdRJH4-6lPp8hlO"
      )
      .then(
        () => {
          setSubmitStatus("success");
          form.current.reset();
        },
        () => {
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Contáctame</h2>
        <p className="form-description">
          ¿Tienes un proyecto en mente? Escríbeme y hablemos sobre cómo puedo ayudarte.
        </p>

        <div className="form-group">
          <label htmlFor="name">Tu nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ej: Juan Pérez"
            required
            minLength={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ej: juan@ejemplo.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Asunto</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Ej: Consulta sobre desarrollo web"
            required
            minLength={5}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Tu mensaje</label>
          <textarea
            id="message"
            name="message"
            placeholder="Describe tu proyecto o consulta..."
            required
            minLength={10}
            rows={5}
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>

        {submitStatus === "success" && (
          <div className="alert success">
            ¡Mensaje enviado correctamente! Me pondré en contacto pronto.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="alert error">
            Hubo un error al enviar el mensaje. Por favor inténtalo nuevamente.
          </div>
        )}
      </form>
    </div>
  );
}