import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Íconos, instalá `lucide-react`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>Mateo GZ</Link>
      </div>

      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Inicio</Link>
        <Link to="/sobre-mi" onClick={closeMenu}>Sobre mí</Link>
        <Link to="/portafolio" onClick={closeMenu}>Portafolio</Link>
        <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Navbar;
