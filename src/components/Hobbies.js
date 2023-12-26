/* Hobbies.js */

import React from 'react';
import './Hobbies.css';

const Hobbies = () => {
  return (
    <section className="section">
      <div className="container hobbies-container">
        <h2>HOBBIES</h2>

        <div className="hobby-card">
          <h3>Computer Games</h3>
          <p>Enjoying computer games in my free time.</p>
        </div>

        <div className="hobby-card">
          <h3>Volleyball</h3>
          <p>Passionate about playing volleyball as a sport.</p>
        </div>

        <div className="hobby-card">
          <h3>Travelling</h3>
          <p>Exploring new places and cultures through traveling.</p>
        </div>

        {/* Add more hobby cards as needed */}
      </div>
    </section>
  );
};

export default Hobbies;
