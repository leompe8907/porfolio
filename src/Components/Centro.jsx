import React from "react";
import "../Static/Style/Centro.scss";

function Centro() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading" className="hero-title">
          <span className="hero-greeting">Hola, Soy</span>
          <span className="hero-name">Leonard Amaya</span>
        </h1>
        
        <p className="hero-subtitle">
          Bienvenidos a mi <strong>espacio digital</strong> de desarrollo y creatividad
        </p>
        
        <div className="hero-cta">
          <a 
            href="CV_Leonard_Amaya_Daza.pdf" 
            download="CV_Leonard_Amaya_Daza.pdf"
            className="cv-button"
          >
            Descargar CV
            <span className="download-icon" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Centro;