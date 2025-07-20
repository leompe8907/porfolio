import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import '../Static/Style/Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-social">
          <a 
            href="https://github.com/leompe8907" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/leonardamaya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="social-icon" />
          </a>
          <a
            href="leonardamaya8907@hotmail.com"
            aria-label="Enviar email"
          >
            <FiMail className="social-icon" />
          </a>
        </div>

        <div className="footer-copyright">
          <p>
            © {currentYear} Leonard Amaya. Todos los derechos reservados.
          </p>
          <p className="footer-motto">
            Construyendo soluciones digitales con pasión.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;