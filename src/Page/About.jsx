import React from 'react'
import Navbar from '../Components/Navbar'
import AboutMe from '../Components/AboutMe'
import { Helmet } from 'react-helmet';  // <-- Importar Helmet
import '../Static/Style/About.scss';


function About() {
  return (
    <div className="about-page">
      {/* Helmet va primero para gestión del head del documento */}
      <Helmet>
        <title>Leonard Amaya | Sobre Mí</title>
        <meta name="description" content="Información sobre Leonard Amaya, Desarrollador Full Stack especializado en Python, Django y React" />
        <meta property="og:title" content="Leonard Amaya - Portafolio Profesional" />
        <meta property="og:description" content="Conoce más sobre mi experiencia como desarrollador Full Stack" />
        {/* Otros meta tags para SEO */}
      </Helmet>
      
      <Navbar/>
      <AboutMe/>
    </div>
  )
}

export default About