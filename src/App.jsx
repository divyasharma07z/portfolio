import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import About from './components/about';
import Projects from './components/Project';
import Myservices from './components/Myservices'
import Contact from './components/contact';

import "./App.css";

const App = () => {
  return (
    <div className="body">
      <Navbar />
      <div id="home"><HomePage /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="services"><Myservices /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default App;
