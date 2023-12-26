/* Activities.js */

import React from 'react';
import './Activities.css';

const Activities = () => {
  return (
    <section className="section">
      <div className="container activities-container">
        <h2>CO-CURRICULAR ACTIVITIES</h2>

        <div className="activity-card">
          <h3>Committee Member</h3>
          <p>In Board of Information Technology, Student Council, CMRCET</p>
          <p>06/2021 - 06/2022</p>
        </div>

        <div className="activity-card">
          <h3>Event Organizer</h3>
          <p>Organized an event GUESS THE OUTPUT in Azura, 2022, a Techfest in CMRCET, Hyderabad</p>
          <p>03/2022</p>
        </div>

        {/* Add more activity cards as needed */}
      </div>
    </section>
  );
};

export default Activities;
