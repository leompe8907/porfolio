import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
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
      <div className="contact-card">
        <div className="contact-header">
          <h2>Contacto Profesional</h2>
          <p>Complete el formulario y me pondré en contacto lo antes posible</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <div className="input-icon">
              <FiUser className="icon" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              required
              minLength={3}
            />
            <span className="input-border"></span>
          </div>

          <div className="form-group">
            <div className="input-icon">
              <FiMail className="icon" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
            <span className="input-border"></span>
          </div>

          <div className="form-group">
            <div className="input-icon">
              <FiMessageSquare className="icon" />
            </div>
            <input
              type="text"
              name="title"
              placeholder="Asunto del mensaje"
              required
              minLength={5}
            />
            <span className="input-border"></span>
          </div>

          <div className="form-group textarea-group">
            <textarea
              name="message"
              placeholder="Su mensaje..."
              required
              minLength={10}
              rows={5}
            ></textarea>
            <span className="textarea-border"></span>
          </div>

          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                <FiSend className="btn-icon" />
                Enviar Mensaje
              </>
            )}
          </button>

          {submitStatus === "success" && (
            <div className="status-message success">
              <FiCheckCircle className="status-icon" />
              <span>¡Mensaje enviado con éxito! Le responderé pronto.</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="status-message error">
              <FiAlertCircle className="status-icon" />
              <span>Error al enviar. Por favor, inténtelo de nuevo.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}