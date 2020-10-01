import React from 'react';
import styled from 'styled-components';
import headshot from '../../assets/images/Linkedin.png'


//styled-components
const AboutContainer = styled.div`
    background: #202124;
    border-radius: 40px;
    -webkit-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    -moz-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
`;
const Columns = styled.div`
    display: flex;
    flex-flow: nowrap;
    justify-content: space-around;
    align-items: center;
    -webkit-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    -moz-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
`;
const ImportantColor2 = styled.h2`
    opacity: 87%;
    `;
const ImportantColorP = styled.p`
    opacity: 60%;
    `;
const Headshot = styled.img`
    max-width: 450px;
    width: 100%;
    border-radius: 250px;
`;

const AboutText = styled.div`
    max-width: 40%;
`;


const About = () => {
    return (
        <AboutContainer>
            <h1>ABOUT ME</h1>
            <Columns>
                <div class="headshot-img">
                    <Headshot src={headshot} />
                </div>
                <AboutText>
                    <ImportantColor2><strong><i>Hello World!</i></strong></ImportantColor2>
                    <ImportantColor2>My name is <i>Archie Saquilabon</i></ImportantColor2>
                    <ImportantColorP>I'm a full stack developer who started from being a licensed pharmacy technician to web development – with a world traveling choreographer role in between. Possessing strong project and team management skills, design sense, and photography/videography skills.</ImportantColorP>
                </AboutText>
            </Columns>
        </AboutContainer>
    )
}

export default About;
