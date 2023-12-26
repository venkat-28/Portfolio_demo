/* Projects.js */

import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="section">
      <div className="container projects-container">
        <h2>PERSONAL PROJECTS</h2>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Developed a personal portfolio website to showcase my experience, projects, achievements, etc. Explored front-end development while developing this project.</p>
          <p>05/2022 - 05/2020</p>
          <span>Techstack: HTML, CSS, Bootstrap, Javascript</span>
        </div>

        <div className="project-card">
          <h3>Pneumonia Detector</h3>
          <p>Developed a web application to analyze pneumonia detection on chest x-ray images. Users can visualize the accuracy of infection present in the lungs.</p>
          <p>10/2022 - 11/2022</p>
          <span>Techstack: OpenCV, CNN, HTML, CSS, Flask</span>
        </div>

        <div className="project-card">
          <h3>EverOtt</h3>
          <p>Everott website is an innovative platform designed to offer seamless rental of premium OTT services to the audience. Developed and implemented the website using ReactJS framework, utilizing EmailJS for auto-response emails, Node.js for backend, and MongoDB as the database.</p>
          <p>02/2023 - 03/2023</p>
          <span>Techstack: ReactJS, EmailJS, Node.js, MongoDB</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
