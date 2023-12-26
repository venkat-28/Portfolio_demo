import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Achievements from './components/Achievements';
import Activities from './components/Activities';
import Certificates from './components/Certificates';
import Hobbies from './components/Hobbies';
import './App.css';
//import App from 'App.css'
const App = () => {
  return (
    <div className="App">
      <Header />
      <Education />
      <Projects />
      <TechnicalSkills />
      <Achievements />
      <Activities />
      <Certificates />
      <Hobbies />
    </div>
  );
};

export default App;
