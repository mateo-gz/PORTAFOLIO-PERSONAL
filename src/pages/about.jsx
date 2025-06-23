import React from 'react';
import SkillList from '../components/SkillList'

const About = () => {
  return (
    <section className="about-section">
      <div className="glass-card about-card">
        <h2 className="about-title">Sobre mí</h2>
        <p className="about-description">
          Soy Mateo, un developer que le mete cabeza, corazón y código a todo lo que hace. Me encanta crear experiencias digitales que funcionen bien y se vean aún mejor. Siempre estoy en modo aprendizaje constante.
        </p>
      </div>

      <SkillList />

      <div className="glass-card contact-card">
        <p className="about-contact">
          ¿Tienes un proyecto o idea? ¡Hablemos! Me apasionan los retos y colaborar en cosas que sumen valor real.
        </p>
      </div>
    </section>
  );
};

export default About;
