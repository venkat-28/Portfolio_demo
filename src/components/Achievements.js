/* Achievements.js */

import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="section">
      <div className="container achievements-container">
        <h2>ACHIEVEMENTS</h2>

        <div className="achievement-card">
          <h3>Secured 1st Position</h3>
          <p>Among 50+ participants in Web Designing competition held in AZURA, 2K22 at CMRCET</p>
        </div>

        {/* Add more achievement cards as needed */}
      </div>
    </section>
  );
};

export default Achievements;
