import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { useNavigate } from 'react-router-dom';

import L from "../Static/Img/LD.png"

import "../Static/Style/Navbar.scss";

export default function Navbar() {
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollTop = useRef(0);
  const navLinksRef = useRef(null);

  const navigate = useNavigate();

  // Toggle menu on click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambiamos el estado para abrir/cerrar el menú
  };

  // Toggle navbar visibility on scroll
  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset > lastScrollTop.current) {
      setIsNavBarVisible(false);
    } else if (pageYOffset < lastScrollTop.current) {
      setIsNavBarVisible(true);
    }
    lastScrollTop.current = pageYOffset;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`btnMenuBurger ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}></div>
      <div className={`background ${isMenuOpen ? 'show' : ''}`}></div>
      <div className={`header ${isNavBarVisible ? '' : 'hide'} ${isMenuOpen ? 'show' : ''}`}>
        <div className="title-navbar">
          <img src={L} alt='Logo' className='logoNavBar'/>
        </div>
        <nav className="navbar">
            <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`} ref={navLinksRef}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div className='navBarSocial'>
          <a className='iconNav' href="https://www.instagram.com/leompe/">
            <InstagramIcon className='iconNavBar'/>
          </a>
          <a className='iconNav' href="https://www.linkedin.com/in/leonardamaya/">
            <LinkedInIcon className='iconNavBar'/>
          </a>
          <a className='iconNav' href="https://github.com/leompe8907">
            <GitHubIcon className='iconNavBar'/>
          </a>
        </div>
      </div>
    </>
  )
}

