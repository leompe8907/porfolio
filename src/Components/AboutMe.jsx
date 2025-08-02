import ProfilePhoto from '../Static/Img/Leo.webp';
import SkillBadge from '../Components/SkillBadge';

import "../Static/Style/AboutMe.scss"

function AboutMe() {
  const skills = [
    'Python', 'Django', 'React JS', 'PostgreSQL',
    'Chart.js', 'APIs REST', 'Docker', 'Git', 'HTML', 
    'CSS', 'Boostrap', 'MaterialUI', 'JavaScript',
    'SQL', 'Django Rest Framework', 'Power BI'
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
              Soy Leonard, un desarrollador Full Stack apasionado por crear soluciones digitales eficientes y escalables. 
              Con más de 2 años de experiencia profesional, me especializo en transformar ideas complejas en aplicaciones 
              web funcionales y centradas en el usuario.
            </p>
            
            <h3 className="subsection-title">Mi Trayectoria</h3>
            <p className='paragraph'>
              Actualmente trabajo como <strong>Desarrollador Full Stack en Bromteck</strong>, donde he tenido la 
              oportunidad de liderar proyectos de alta complejidad como la herramienta de Telemetría, que procesa 
              más de 5,000 registros diarios y ha optimizado las consultas en un 40%. Mi experiencia abarca desde 
              el desarrollo de APIs REST con Django y PostgreSQL hasta la creación de interfaces interactivas con 
              React y Chart.js.
            </p>
            
            <h3 className="subsection-title">Mi Enfoque</h3>
            <p className='paragraph'>
              Lo que me diferencia es mi capacidad de combinar mis habilidades técnicas con mi formación en 
              <strong> Administración de Empresas</strong>. Esta perspectiva única me permite no solo desarrollar 
              código de calidad, sino crear soluciones que realmente aporten valor al negocio. Me enfoco en la 
              optimización continua, las pruebas rigurosas y la mejora de la experiencia del usuario en cada proyecto.
            </p>
            
            <div className="current-focus">
              <h3 className="subsection-title">Crecimiento Continuo</h3>
              <p>
                Creo firmemente en la mejora continua. Actualmente estoy profundizando mis conocimientos en 
                <strong> ciberseguridad</strong> y mejores prácticas para desarrollo seguro, siempre buscando 
                mantenerme actualizado con las últimas tecnologías y tendencias del sector.
              </p>
            </div>

            <div className="current-focus">
              <h3 className="subsection-title">Mis Valores</h3>
              <p>
                La <strong>proactividad</strong>, la <strong>comunicación efectiva</strong> y el 
                <strong> trabajo en equipo</strong> son pilares fundamentales en mi forma de trabajar. 
                Disfruto colaborando en equipos multidisciplinarios y enfrentando nuevos desafíos que 
                me permitan seguir creciendo profesionalmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;