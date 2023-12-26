/* Certificates.js */

import React from 'react';
import './Certificates.css';

const Certificates = () => {
  return (
    <section className="section">
      <div className="container certificates-container">
        <h2>CERTIFICATES</h2>

        <div className="certificate-card">
          <h3>IBM SkillsBuild program</h3>
          <p>Successfully completed IBM SkillsBuild program where I developed a full-stack Healthcare Guidance project.</p>
          <p>09/2022 - 11/2022</p>
           <a href="https://drive.google.com/file/d/1w4lMbsGosso9vhGAsV9tBCetkN35aRyd/view" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>

        <div className="certificate-card">
          <h3>Machine Learning Coding Internship</h3>
          <p>Successfully completed Machine Learning Coding Internship. Building Chatbot for Online Food Ordering.</p>
          <p>11/2022 - 12/2022</p>
           <a href="https://drive.google.com/file/d/189NTLlG2zsyTbbubNuDtd0gV_AiRXGN0/view" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>

        {/* Add more certificate cards as needed */}
      </div>
    </section>
  );
};

export default Certificates;
