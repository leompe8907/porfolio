import "../Static/Style/Projects.scss"

import LD from "../Static/Img/LD.png"

// OPCIÓN 1: Cards Grid Layout (Recomendado para portafolios)
function Projects() {
  const projects = [
    {
      id: 1,
      title: "UDID",
      company: "Bromteck",
      period: "Jun 2024 - Presente",
      description: "Funcionalidad externa que permite que la aplicacion de video, iniciar sesion sin la necesidad de que usuario deba introducir las credenciales",
      technologies: ["Django", "PostgreSQL", "Django Rest-Framework"],
      highlights: [
        "Control de los accesos por usuario",
        "Evacion de fuga interna de datos",
        "Encriptado independiente de credenciales",
      ],
      image: {LD},
      demoLink: "https://delancert.vercel.app/login",
      githubLink: "https://github.com/leompe8907/Udid" 
    },
    {
      id: 3,
      title: "Telemetría",
      company: "Bromteck",
      period: "Nov 2024 - Feb 2025",
      description: "Herramienta que permite la recopilación y almacenamiento de datos sobre servicios de clientes, organizando y tabulando información para crear tablas y gráficos que visualizan el consumo de usuarios de manera clara y eficiente.",
      technologies: ["Django", "PostgreSQL", "React", "Chart.js"],
      highlights: [
        "Procesamiento de +5K registros diarios",
        "Optimización de consultas en un 40%",
        "API REST para procesamiento de datos",
        "Gráficos interactivos para análisis de tendencias"
      ],
      image: {LD},
      demoLink: "https://delancert.vercel.app/login",
      githubLink: "https://github.com/implementationios/FrontCableAtlantico" 
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          Mis <span className="highlight">Proyectos</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-company">{project.company}</span>
                  <span className="project-period">{project.period}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-highlights">
                  <h4>Logros principales:</h4>
                  <ul>
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.demoLink && (
                    <a href={project.demoLink} className="btn-demo">Ver Demo</a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} className="btn-github">GitHub</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;