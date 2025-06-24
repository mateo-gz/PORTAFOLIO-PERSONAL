import React from 'react';
import ProjectCard from '../components/projectCard';

const Portfolio = () => {
  const projects = [
    {
      title: 'App para Liga de Fútbol',
      description: 'Aplicación para gestionar equipos y partidos de una liga de fútbol.',
      tech: ['React', 'API', 'CSS', 'Node.js', 'Express', 'PostgreSQL'],
      image: '/sn.png',
      github: 'https://github.com/mateo-gz/FRONTENDSN',
      demo: 'https://liga-san-lucas-futsal.onrender.com'
    },
        {
      title: 'Landing Page',
      description: 'Página de aterrizaje para un proyecto ficticio.',
      tech: ['React', 'CSS'],
      image: '/landingPage.png',
      github: 'https://github.com/mateo-gz/landing-page',
      demo: 'https://fake-landing-page-mateo.netlify.app/'
    },
  ];

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">🛠 Proyectos</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
