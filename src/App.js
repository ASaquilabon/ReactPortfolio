import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import WorkExp from './components/work-experience/WorkExperience';
import styled from 'styled-components';

const Background = styled.div`
    background-color: #121212;
    color: #fff;
`;
const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    
`;
function App() {
  return (
    <div className="App">
    <Background>
      <Hero />
      <Container>
        <About />
        <Portfolio />
        <WorkExp />
      </Container>
      </Background>

    </div>
  );
}

export default App;
