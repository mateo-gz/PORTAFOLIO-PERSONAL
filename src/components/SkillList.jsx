import React from 'react';
import SkillItem from './SkillItem';

const skills = [
  { name: 'JavaScript ', progress: 90, color: '#f0db4f' },
  { name: 'React ', progress: 85, color: '#61dafb' },
  { name: 'Node.js ', progress: 75, color: '#68a063' },
  { name: 'CSS ', progress: 95, color: '#264de4' },
  { name: 'HTML ', progress: 98, color: '#e44d26' },
];

const SkillsList = () => (
  <div className="skills-container">
    <h3 className="skills-title">HABILIDADES</h3>
    <ul className="skills-list">
      {skills.map((skill, i) => (
        <SkillItem key={i} {...skill} />
      ))}
    </ul>
  </div>
);

export default SkillsList;
