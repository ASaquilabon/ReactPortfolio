import React from 'react';
import TrynaEat from '../../assets/images/TrynaEat.png'
import GiphyAPI from '../../assets/images/GiphyAPI.png'
import UrbanLA from '../../assets/images/UrbanLAStudio.png'
import SBU from '../../assets/images/SBUBeats.png'
import styled from 'styled-components';
const PortfolioContainer = styled.div`
    background: #202124;
    border-radius: 40px;
    -webkit-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    -moz-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
`;
const Featured = styled.img`
    max-width: 1050px;
    width: 100%;
    -webkit-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    -moz-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
`;
const Icons = styled.img`
    max-width: 60%;
    -webkit-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    -moz-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
`;
const Portfolio = () => {
    return (
        <PortfolioContainer>
            <h1>Portfolio</h1>
            <div class="portfolio">
                <div class="featured-project">
                    <a href="https://asaquilabon.github.io/Random-Food-Button/" target="_blank">
                        <Featured src={TrynaEat} />
                    </a>
                </div>
                <Bottom>
                    <a href="https://asaquilabon.github.io/GiphyAPI/" target="_blank"><Icons src={GiphyAPI} /></a>
                    <a href="http://urbanlastudio.com/" target="_blank"><Icons src={UrbanLA} /></a>
                    <a href="https://asaquilabon.github.io/SBU/" target="_blank"><Icons src={SBU} /></a>
                </Bottom>
            </div>
        </PortfolioContainer>
    )
}
export default Portfolio; 