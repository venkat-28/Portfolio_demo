/* TechnicalSkills.js */

import React from 'react';
import './TechnicalSkills.css';

const TechnicalSkills = () => {
  return (
    <section className="section">
      <div className="container skills-container">
        <h2>TECHNICAL SKILLS</h2>

        <div className="skill-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Web Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li>Flask</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
