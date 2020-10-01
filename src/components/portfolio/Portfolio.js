import React from 'react';
import TrynaEat from '../../assets/images/TrynaEat.png'
import GiphyAPI from '../../assets/images/GiphyAPI.png'
import UrbanLA from '../../assets/images/UrbanLAStudio.png'
import SBU from '../../assets/images/SBUBeats.png'
import styled from 'styled-components';

const HeaderText = styled.h1`
    padding-top: 40px;
`;
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
    border-radius: 50px;
    -webkit-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    -moz-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
`;
const Icons = styled.img`
    max-width: 60%;
    border-radius: 10px;
    -webkit-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    -moz-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    padding-bottom: 40px;
`;
const Portfolio = () => {
    return (
        <PortfolioContainer>
            <HeaderText>Portfolio</HeaderText>
            <div class="portfolio">
                <div class="featured-project">
                    <a href="https://asaquilabon.github.io/Random-Food-Button/" target="_blank">
                        <Featured src={TrynaEat} alt="Tryna Eat Web Application" />
                    </a>
                </div>
                <Bottom>
                    <a href="https://asaquilabon.github.io/GiphyAPI/" target="_blank">
                        <Icons src={GiphyAPI} alt="Giphy API Web Application" />
                        </a>
                    <a href="http://urbanlastudio.com/" target="_blank">
                        <Icons src={UrbanLA} alt="Urban LA Website"/>
                        </a>
                    <a href="https://asaquilabon.github.io/SBU/" target="_blank">
                        <Icons src={SBU} alt="SBU Website" />
                    </a>
                </Bottom>
            </div>
        </PortfolioContainer>
    )
}
export default Portfolio; 