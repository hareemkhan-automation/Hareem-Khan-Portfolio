import React, { useState } from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          HK.
        </a>

        {/* Hamburger Menu Toggle Button for Mobile */}
        <button
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#about" className="navbar-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#skills" className="navbar-link" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#experience" className="navbar-link" onClick={closeMenu}>
              Experience
            </a>
            
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li className="navbar-item cta-wrapper">
            <a href="#hire-me" className="navbar-cta" onClick={closeMenu}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
