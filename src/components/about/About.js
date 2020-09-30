import React from 'react';
import styled, {css} from 'styled-components';


const AboutContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;
const Columns = styled.div`
    display: flex;
    flex-flow: nowrap;
    justify-items: center;
`;

const About = () => {
    return (
        <AboutContainer>
            <h1>ABOUT ME</h1>
            <Columns>
                <div class="headshot-img">
                    <img src="https://via.placeholder.com/450" />
                </div>
                <div class="about-me-text">
                    <h2><strong><i>Hello World!</i></strong></h2>
                    <h3>My name is <i>Archie Saquilabon</i></h3>
                    <p>I'm a full stack developer who started from being a licensed pharmacy technician to web development – with a world traveling choreographer role in between. Possessing strong project and team management skills, design sense, and photography/videography skills.</p>
                </div>
            </Columns>
        </AboutContainer>
    )
}

export default About;
