/* Header.js */

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
     
      <div>
        <h1>                Posanapally Venkat</h1>
      </div>
      <div className="right-info">
        <p className="email-info">venkatpatel28@gmail.com</p>
        <p className="phone-info">7702160867</p>
        <p className="location-info">Sangareddy, India</p>
        <p className="github-info"><a href="https://github.com/venkat-28" target="_blank" rel="noopener noreferrer">github.com/venkat-28</a></p>
      </div>
    </header>
  );
};

export default Header;
