/* Education.js */

import React from 'react';
import './Education.css';
import './Components.css';
const Education = () => {
  return (
    <section className="section">
      <div className="container education-container">
        <h2>EDUCATION</h2>

        <div className="education-card">
          <h3>Bachelor of Technology</h3>
          <p>CMR College of Engineering & Technology</p>
          <p>11/2020 - Present</p>
          <p>Computer Science with specialization in AI & ML.</p>
          <span>CGPA: 8.44</span>
        </div>

        <div className="education-card">
          <h3>Intermediate Education</h3>
          <p>Narayana Junior College, Lingampally</p>
          <p>07/2018 - 03/2020</p>
          <p>MPC.</p>
          <span>CGPA: 9.41</span>
        </div>

        <div className="education-card">
          <h3>High School</h3>
          <p>Karuna High School, Sangareddy</p>
          <p>06/2005 - 05/2018</p>
          <span>CGPA: 8.8</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
