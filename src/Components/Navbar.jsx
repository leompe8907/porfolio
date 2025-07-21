import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ContactMail,LinkedIn, GitHub } from '@mui/icons-material';
import L from "../Static/Img/LD.png";
import "../Static/Style/Navbar.scss";

export default function Navbar() {
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollTop = useRef(0);
  const navbarRef = useRef(null);

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    if (pageYOffset > lastScrollTop.current && pageYOffset > 100) {
      setIsNavBarVisible(false);
    } else {
      setIsNavBarVisible(true);
    }
    lastScrollTop.current = pageYOffset;
  }, []);

  useEffect(() => {
    const debouncedScroll = () => {
      let ticking = false;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header 
      ref={navbarRef}
      className={`header ${!isNavBarVisible ? 'hide' : ''} ${isMenuOpen ? 'show' : ''}`}
      aria-label="Main navigation"
    >
      <button 
        className={`menu-toggle ${isMenuOpen ? 'show' : ''}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        <span className="menu-icon" />
      </button>

      <div className="overlay" onClick={toggleMenu} />

      <div className="navbar-content">
        <Link to="/" className="logo-link">
          <img src={L} alt="Leonardo Mayalogo" className="logo" />
        </Link>

        <nav className="main-nav">
          <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
            {[
              { path: "/", label: "Inicio" },
              { path: "/projects", label: "Proyecto" },
              { path: "/about", label: "Sobre mi" },
              { path: "/contact", label: "Contacta me" }
            ].map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="social-links">
          {[
            { icon: <ContactMail />, url: "mailto:leonardamaya8907@hotmail.com"},
            { icon: <LinkedIn />, url: "https://www.linkedin.com/in/leonardamaya/" },
            { icon: <GitHub />, url: "https://github.com/leompe8907" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label={`${social.icon.type.name} profile`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}