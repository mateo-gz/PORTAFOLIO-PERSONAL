import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react'; // Asegurate de tener lucide-react

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} Mateo GZ. Todos los derechos reservados.</p>

      <div className="footer-icons">
        <a href="https://github.com/mateo-gz" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a href="mailto:mr.mateo.oficial@gmail.com">
          <Mail />
        </a>
        <a href="https://www.linkedin.com/in/mateo-gomez-3656282a7/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
