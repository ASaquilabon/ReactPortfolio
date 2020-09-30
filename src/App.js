import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import WorkExp from './components/work-experience/WorkExperience';

function App() {
  return (
    <div className="App">

      <Hero />
      <div>
      <About />
      <Portfolio />
      <WorkExp />
      </div>

    </div>
  );
}

export default App;
