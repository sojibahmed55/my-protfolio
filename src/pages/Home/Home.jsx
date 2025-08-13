import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Skill from '../Skill/Skill';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div id='home'>
            <HeroSection></HeroSection>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Home;