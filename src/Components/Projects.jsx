import React from 'react';
import "../Static/Style/Projects.scss"
import aventura1 from '../Static/Img/aventura1.png'
import aventura2 from '../Static/Img/aventura2.png'
import aventura3 from '../Static/Img/aventura3.png'

function Projects() {
  // Proyecto principal/destacado
  const featuredProject = {
    id: 1,
    title: "UDID",
    company: "Bromteck",
    period: "Jun 2024 - Presente",
    description: "Funcionalidad externa que permite que la aplicacion de video, iniciar sesion sin la necesidad de que usuario deba introducir las credenciales",
    technologies: ["Django", "PostgreSQL", "Django Rest-Framework", "cryptography"],
    highlights: [
      "Control de los accesos por usuario",
      "Prevención de fuga interna de datos",
      "Encriptado independiente de credenciales",
    ],
    image: '',
    demoLink: "",
    isPrivate: true
  };

  // Otros proyectos profesionales
  const professionalProjects = [
    {
      title: "Telemetría",
      company: "Bromteck",
      period: "Nov 2024 - Feb 2025",
      description: "Herramienta que permite la recopilación y almacenamiento de datos sobre servicios de clientes, organizando y tabulando información para crear tablas y gráficos que visualizan el consumo de usuarios de manera clara y eficiente.",
      technologies: ["Django", "PostgreSQL", "Django-cron" ,"React", "Chart.js"],
      highlights: [
        "Procesamiento de +5K registros diarios",
        "Optimización de consultas en un 40%",
        "API REST para procesamiento de datos",
        "Gráficos interactivos para análisis de tendencias"
      ],
      image: '',
      demoLink: "https://delancert.vercel.app/login",
      isPrivate: true
    }
  ];

  // Proyectos personales (estos SÍ pueden tener GitHub)
  const personalProjects = [
    {
      id: 3,
      title: "Turismo + Aventura",
      period: "2024",
      type: "personal",
      description: "Desarrollo de mi portafolio personal con React, mostrando mis habilidades y proyectos.",
      technologies: ["HTML", "SCSS", "JavaScript"],
      images: [aventura1, aventura2, aventura3],
      githubLink: "https://github.com/leompe8907/turismo-aventura",
      demoLink: "https://turismo-five.vercel.app/"
    }
    // Aquí puedes agregar más proyectos personales
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          Mis <span className="highlight">Proyectos</span>
        </h2>
        
        {/* Proyecto Destacado */}
        <div className="featured-project">
          <h3 className="subsection-title">Proyecto Destacado</h3>
          <article className="project-card featured">
            {featuredProject.image && (
              <div className="project-image">
                <img src={featuredProject.image} alt={featuredProject.title} />
              </div>
            )}
            
            <div className="project-content">
              <div className="project-header">
                <h4 className="project-title">{featuredProject.title}</h4>
                <span className="project-company">{featuredProject.company}</span>
                <span className="project-period">{featuredProject.period}</span>
              </div>
              
              <p className="project-description">{featuredProject.description}</p>
              
              <div className="project-highlights">
                <h5>Logros principales:</h5>
                <ul>
                  {featuredProject.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                {featuredProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {featuredProject.isPrivate && (
                  <span className="private-repo">
                    <i className="icon-lock">🔒</i>
                    Código privado (Empresa)
                  </span>
                )}
                {featuredProject.demoLink && (
                  <a href={featuredProject.demoLink} className="btn-demo">Ver Demo</a>
                )}
              </div>
            </div>
          </article>
        </div>

        {/* Otros Proyectos Profesionales */}
        {professionalProjects.length > 0 && (
          <div className="professional-projects">
            <h3 className="subsection-title">Otros Proyectos Profesionales</h3>
            <div className="projects-grid compact">
              {professionalProjects.map((project) => (
                <article key={project.id} className="project-card compact">
                  <div className="project-content">
                    <div className="project-header">
                      <h4 className="project-title">{project.title}</h4>
                      <span className="project-company">{project.company}</span>
                      <span className="project-period">{project.period}</span>
                    </div>
                    
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-highlights compact">
                      {project.highlights.map((highlight, index) => (
                        <span key={index} className="highlight-tag">✓ {highlight}</span>
                      ))}
                    </div>
                    
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge small">{tech}</span>
                      ))}
                    </div>

                    {project.isPrivate && (
                      <div className="project-status">
                        <span className="private-indicator">
                          <i className="icon-lock">🔒</i>
                          Proyecto empresarial
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Proyectos Personales */}
        {personalProjects.length > 0 && (
          <div className="personal-projects">
            <h3 className="subsection-title">Proyectos Personales</h3>
            <div className="projects-list">
              {personalProjects.map((project) => (
                <div key={project.id} className="project-item personal">
                  <div className="project-main">
                    <h4 className="project-title">
                      {project.title}
                      <span className="project-type">Personal</span>
                    </h4>
                    <div className="project-images">
                      {project.images && project.images.map((img, index) => (
                        <img 
                          key={index} 
                          src={img} 
                          alt={`${project.title} - imagen ${index + 1}`}
                          className="project-screenshot"
                        />
                      ))}
                    </div>
                    <p className="project-period">{project.period}</p>
                    <p className="project-description">{project.description}</p>
                  </div>
                  
                  <div className="project-footer">
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge small">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="project-links">
                      {project.githubLink && (
                        <a href={project.githubLink} className="btn-github small">
                          <i className="icon-github">📂</i>
                          GitHub
                        </a>
                      )}
                      {project.demoLink && (
                        <a href={project.demoLink} className="btn-demo small">Demo</a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="projects-cta">
          <p>
            ¿Interesado en conocer más detalles sobre mis proyectos o colaborar conmigo? 
            <a href="contact" className="cta-link">¡Hablemos!</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;