import React from 'react';
import logo from '../../logo.svg'

const Portfolio = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <div class="portfolio">
                <div class="featured-project">
                    <a href="https://asaquilabon.github.io/Random-Food-Button/">
                        <img src="http://placehold.jp/1050x480.png" />
                    </a>
                </div>
                <div class="smaller-projects">
                    <a href="https://asaquilabon.github.io/SBU/index.html"><img src="https://via.placeholder.com/250" /></a>
                    <a href="http://urbanlastudio.com/"><img src="https://via.placeholder.com/250" /></a>
                    <a href="https://asaquilabon.github.io/JustinVillalobos/"><img src="https://via.placeholder.com/250" /></a>
                </div>
            </div>
        </div>
    )
}
export default Portfolio; 