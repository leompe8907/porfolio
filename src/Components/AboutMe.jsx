import React from 'react';
import ProfilePhoto from '../Static/Img/LD.png';
import SkillBadge from '../Components/SkillBadge';

import "../Static/Style/AboutMe.scss"

function AboutMe() {
  const skills = [
    'Python', 'Django', 'React', 'PostgreSQL', 
    'Chart.js', 'REST APIs', 'Docker', 'Git'
  ];

  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className="about-container">
        <div className="profile-photo-container">
          <img 
            src={ProfilePhoto} 
            alt="Leonard Amaya - Desarrollador Full Stack"
            className="profile-photo"
          />
          <div className="skills-container">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="about-content">
          <h2 id="about-heading" className="section-title">
            Sobre <span className="highlight">Mí</span>
          </h2>
          
          <div className="about-text">
            <p className="intro-paragraph">
              Desarrollador Full Stack especializado en crear soluciones digitales eficientes y escalables.
            </p>
            
            <h3 className="subsection-title">Mi Experiencia</h3>
            <p>
              En mi rol en <strong>Bromteck</strong>, lideré el desarrollo de una aplicación de telemetría completa:
            </p>
            <ul className="experience-list">
              <li>API REST con Django y PostgreSQL</li>
              <li>Visualización de datos con React y Chart.js</li>
              <li>Integraciones con dispositivos IoT</li>
            </ul>
            
            <h3 className="subsection-title">Mi Enfoque</h3>
            <p>
              Combino mis habilidades técnicas con mi formación en <strong>Administración de Empresas</strong> para crear soluciones que no solo son técnicamente sólidas, sino también alineadas con los objetivos del negocio.
            </p>
            
            <div className="current-focus">
              <h3 className="subsection-title">Actualmente...</h3>
              <p>
                Estoy profundizando en <strong>ciberseguridad</strong> y mejores prácticas para desarrollo seguro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;