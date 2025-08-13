import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Skill from '../Skill/Skill';
import Contact from '../Contact/Contact';
import About from '../About/About';

const Home = () => {
    return (
        <div id='home'>
            
            <HeroSection></HeroSection>
            <About></About>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Home;