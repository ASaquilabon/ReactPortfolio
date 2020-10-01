import React from 'react';
import video from '../../assets/videos/archiesaquilabon.mp4'
import Poster from '../../assets/images/AS-Banner.png'
import './hero.css'

const Hero = () => {
    return (
        <div>
        <header className="App-header">
        <video autoPlay loop muted poster={Poster}>
            <source src={video} type='video/mp4' />
            <source src={video} type="video/ogg" /> 
        </video>
        </header>
        </div>
    )
}
export default Hero; 