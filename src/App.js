import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import WorkExp from './components/work-experience/WorkExperience';
import styled, {css} from 'styled-components';


const MainContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;
function App() {
  return (
    <div className="App">

      <Hero />
      <MainContainer>
        <About />
        <Portfolio />
        <WorkExp />
      </MainContainer>

    </div>
  );
}

export default App;
