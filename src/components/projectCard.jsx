import React from 'react';

const ProjectCard = ({ title, description, tech, image, github, demo }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tech-list">
          {tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
