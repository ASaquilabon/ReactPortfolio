import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <h1>ABOUT ME</h1>
        <div class="about-me">
          <div class="headshot-img">
            <img src="https://via.placeholder.com/450" />
          </div>
          <div class="about-me-text">
            <h2><strong><i>Hello World!</i></strong></h2>
            <h3>My name is <i>Archie Saquilabon</i></h3>
            <p>I'm a full stack developer who started from being a licensed pharmacy technician to web development – with a world traveling choreographer role in between. Possessing strong project and team management skills, design sense, and photography/videography skills.</p>
          </div>
        </div>
        <h1>Portfolio</h1>
        <div class="portfolio">
          <a href="https://asaquilabon.github.io/Random-Food-Button/"><img src="https://archiesaquilabon.com/assets/images/RFB.png" /></a>
          <a href="https://asaquilabon.github.io/SBU/index.html"><img src="https://archiesaquilabon.com/assets/images/sbu.png" /></a>
          <a href="http://urbanlastudio.com/"><img src="https://archiesaquilabon.com/assets/images/Urban%20La.png" /></a>
          <a href="https://asaquilabon.github.io/JustinVillalobos/"><img src="https://archiesaquilabon.com/assets/images/Justin.png" /></a>
        </div>
        <h1>Work Experience</h1>
      </div>
    </div>
  );
}

export default App;
