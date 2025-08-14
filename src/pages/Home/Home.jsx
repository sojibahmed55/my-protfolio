import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Skill from '../Skill/Skill';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div id='home'>
            
            
            <HeroSection></HeroSection>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;